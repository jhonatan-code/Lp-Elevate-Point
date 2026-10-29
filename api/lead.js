// ═══════════════════════════════════════════════════════════════════════════
// /api/lead: CTM FormReactor proxy for the Elevate Point Google Ads landing page.
// elev8.io standard LP lead proxy.
//
// WHY A PROXY. FormReactor authenticates with a per reactor key (?key=) or the
// account's access/secret keys (HTTP Basic). Neither can sit in browser code
// without publishing a write token into the client's admissions queue. The key
// lives in Vercel env vars and never reaches the browser. The proxy also
// rewrites the phone number to E.164, the only format CTM accepts.
//
// ── LAUNCH IS BLOCKED UNTIL KEYS ARRIVE ─────────────────────────────────────
// Reactor FRT472ABB2C5…80B2 (CTM account 552861, given 2026-10-29 in ClickUp 1dfm34xzcct). Its key lives only in Vercel
// (CTM_FORMREACTOR_KEY), never in this repo. With keys unset this handler logs loudly and sends the visitor to the
// thank-you page in its "please call us" state. It never pretends a lead was
// accepted, so no lead_accepted conversion fires.
//
// ENVIRONMENT (Vercel, never committed):
//   CTM_FORMREACTOR_ID     the reactor to post to (FRT...)
//   CTM_FORMREACTOR_KEY    preferred auth, sent as ?key=
//   CTM_ACCESS_KEY + CTM_SECRET_KEY   fallback auth, HTTP Basic
//   CTM_ALLOW_STUB=1       local/preview only: complete without CTM
//
// RESPONSES. A fetch with `Accept: application/json` gets JSON
// { ok, redirect }. A plain form post (no JS) gets a 303 to the same URL.
//   /thank-you/?sent=1        CTM accepted the lead (the only conversion)
//   /thank-you/               discarded as spam (no conversion, no hint why)
//   /thank-you/?issue=<why>   failure; the page leads with the phone number
// ═══════════════════════════════════════════════════════════════════════════

export const config = { maxDuration: 15 };

const CTM_ENDPOINT = 'https://api.calltrackingmetrics.com/api/v1/formreactor';
const UPSTREAM_TIMEOUT_MS = 8000;
const MAX_FIELD_LEN = 512;
const MAX_BODY_BYTES = 32_000;
const SID_RE = /^[A-Za-z0-9_-]{6,128}$/;
const REACTOR_RE = /^FRT[0-9A-F]{20,80}$/i;

// Rebuilt from this allowlist, never passed through, so nobody can set reactor
// parameters by adding fields. ⚠️ CTM SILENTLY DROPS NAMES IT DOES NOT
// RECOGNIZE and still says success. Keys match the reactor's own sample
// (2026-10-29): membership_policy_id, insurance_carrier, sms_consent.
// tag_list is deliberately absent: elev8 tags are applied by admissions
// scoring in CTM, never by the landing page.
export const ALLOWED = [
  'caller_name',
  'email',
  'custom_fields[insurance_carrier]',
  'custom_fields[membership_policy_id]',
  'custom_fields[sms_consent]',
  'visitor_sid',
  'paid_attribution[gclid]',
  'paid_attribution[gbraid]',
  'paid_attribution[wbraid]',
  'paid_attribution[campaign_id]',
  'paid_attribution[adgroup_id]',
  'paid_attribution[creative_id]',
  'paid_attribution[form_id]',
  'paid_attribution[source]',
  'paid_attribution[medium]',
  'paid_attribution[campaign]',
];

export function toE164(raw) {
  if (!raw) return null;
  const trimmed = String(raw).trim();
  if (/^\+[1-9]\d{7,14}$/.test(trimmed)) return trimmed;
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (digits.length > 11 && digits.length <= 15) return `+${digits}`;
  return null;
}

// Each page posts to its own FormReactor. /admissions/ (Recovery.com traffic)
// reads the RECOVERY_ prefixed vars; / and /triwest/ (Google Ads) read the
// unprefixed ones. The page is known from form_id ("admissions-hero", ...).
export function envPrefix(formId) {
  return String(formId || '').startsWith('admissions-') ? 'RECOVERY_' : '';
}

/** CTM auth from the environment, or null when unconfigured. */
export function ctmAuth(env = process.env, prefix = '') {
  const v = (name) => env[`${prefix}${name}`];
  const reactor = (v('CTM_FORMREACTOR_ID') || '').trim();
  if (!REACTOR_RE.test(reactor)) return null;
  if (v('CTM_FORMREACTOR_KEY')) return { reactor, mode: 'key', key: v('CTM_FORMREACTOR_KEY') };
  if (v('CTM_ACCESS_KEY') && v('CTM_SECRET_KEY')) {
    const b64 = Buffer.from(`${v('CTM_ACCESS_KEY')}:${v('CTM_SECRET_KEY')}`).toString('base64');
    return { reactor, mode: 'basic', header: `Basic ${b64}` };
  }
  return null;
}

export function stubAllowed(env = process.env) {
  return env.CTM_ALLOW_STUB === '1' && env.VERCEL_ENV !== 'production';
}

// ── SPAM ────────────────────────────────────────────────────────────────────
// ⚠️ Every rule is a false positive risk on a crisis lead, so they stay narrow.
// Never key on how a name is spelled or what script it is written in.
const MIN_FILL_MS = 3000;
const NAME_SPAM = [
  /\b(you have|new message|message\s*[№#]|click here|read now)\b/i,
  /[№]/,
  /https?:\/\/|www\.|\.(com|net|ru|xyz)\b/i,
  /[✀-➿☀-⛿\uD83C-\uDBFF]/,
];

export function spamReason(fields, now = Date.now()) {
  if (fields.get('company_website')) return 'honeypot';
  const renderedAt = Number(fields.get('rendered_at'));
  if (Number.isFinite(renderedAt) && renderedAt > 0) {
    const elapsed = now - renderedAt;
    if (elapsed >= 0 && elapsed < MIN_FILL_MS) return 'too-fast';
  }
  const name = fields.get('caller_name') || '';
  if (NAME_SPAM.some((re) => re.test(name))) return 'name-pattern';
  if (name.length > 80) return 'name-length';
  return null;
}

// Per instance, in memory: a speed bump, not a wall. Vercel Firewall rate
// limiting is the durable fix for volume.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();
export function rateLimited(ip, now = Date.now()) {
  if (!ip) return false;
  const fresh = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  fresh.push(now);
  hits.set(ip, fresh);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(k);
  }
  return fresh.length > RATE_MAX;
}

/** Body CTM receives, or null without a usable phone number. */
export function buildPayload(fields) {
  const phone = toE164(fields.get('phone_number'));
  if (!phone) return null;
  const out = new URLSearchParams();
  out.set('phone_number', phone);
  for (const name of ALLOWED) {
    const value = (fields.get(name) || '').trim();
    if (!value) continue;
    if (name === 'visitor_sid' && !SID_RE.test(value)) continue;
    out.set(name, value.slice(0, MAX_FIELD_LEN));
  }
  return out;
}

export function redactDigits(text) {
  return text == null ? null : String(text).replace(/\d{5,}/g, (d) => '#'.repeat(d.length));
}

function readBody(req) {
  if (typeof req.body === 'string') return Promise.resolve(req.body);
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', (c) => {
      total += c.length;
      if (total > MAX_BODY_BYTES) reject(new Error('TOO_LARGE'));
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  const wantsJson = String(req.headers.accept || '').includes('application/json');
  // Set once the body is read: leads from /admissions/ land on
  // /thank-you/?p=admissions so the page shows the Recovery number.
  let page = '';
  const reply = (target, ok) => {
    const path = page ? `${target}${target.includes('?') ? '&' : '?'}p=${page}` : target;
    if (wantsJson) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-store');
      return res.end(JSON.stringify({ ok, redirect: path }));
    }
    // 303 so the browser follows with GET and a refresh cannot resubmit.
    res.statusCode = 303;
    res.setHeader('Location', path);
    return res.end();
  };
  const fail = (reason) => reply(`/thank-you/?issue=${encodeURIComponent(reason)}`, false);

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    return res.end('Method not allowed');
  }

  let fields;
  try {
    fields = new URLSearchParams(await readBody(req));
  } catch (err) {
    if (err.message === 'TOO_LARGE') return fail('too-large');
    console.error('[lead] body read failed', err);
    return fail('read');
  }

  const prefix = envPrefix(fields.get('paid_attribution[form_id]'));
  if (prefix === 'RECOVERY_') page = 'admissions';
  const auth = ctmAuth(process.env, prefix);
  const stub = !auth && stubAllowed(process.env);
  if (!auth && !stub) {
    // Never fail a lead silently: loud in the logs, a phone number for the
    // visitor. Expected until the CTM keys are set (launch blocker).
    console.error(`[lead] CTM is not configured: set ${prefix}CTM_FORMREACTOR_ID and ${prefix}CTM_FORMREACTOR_KEY (or ${prefix}CTM_ACCESS_KEY + ${prefix}CTM_SECRET_KEY)`);
    return fail('config');
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.headers['x-real-ip'] || '';
  const spam = rateLimited(ip) ? 'rate-limit' : spamReason(fields);
  if (spam) {
    // The ordinary thank-you page. Telling a bot why it failed teaches it.
    console.log('[lead] discarded as spam', { reason: spam });
    return reply('/thank-you/', true);
  }

  if (!(fields.get('caller_name') || '').trim()) {
    console.error('[lead] missing name');
    return fail('name');
  }

  const payload = buildPayload(fields);
  if (!payload) {
    // ⚠️ Never log the value, only its shape. This is a contact detail from
    // an addiction treatment intake form.
    const shape = (fields.get('phone_number') || '').replace(/\d/g, '#').replace(/[^\s#()+.-]/g, 'x').slice(0, 40);
    console.error('[lead] unusable phone number', { shape });
    return fail('phone');
  }

  if (stub) {
    console.warn('[lead] STUB MODE: nothing was sent to CTM', {
      form: payload.get('paid_attribution[form_id]'),
      sid: Boolean(payload.get('visitor_sid')),
      gclid: Boolean(payload.get('paid_attribution[gclid]')),
    });
    return reply('/thank-you/?sent=1', true);
  }

  let ctm;
  try {
    // ⚠️ Never log this URL in key mode: it carries the reactor key.
    const url = auth.mode === 'key'
      ? `${CTM_ENDPOINT}/${auth.reactor}?key=${encodeURIComponent(auth.key)}`
      : `${CTM_ENDPOINT}/${auth.reactor}`;
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    if (auth.mode === 'basic') headers.Authorization = auth.header;
    const upstream = await fetch(url, {
      method: 'POST',
      headers,
      body: payload.toString(),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    ctm = await upstream.json().catch(() => ({}));
  } catch (err) {
    console.error('[lead] upstream request failed', { name: err?.name, message: err?.message });
    return fail('upstream');
  }

  // CTM answers HTTP 200 with status:"error" for a missing required field.
  if (ctm.status !== 'success') {
    console.error('[lead] CTM rejected the submission', { text: redactDigits(ctm.text) });
    return fail('rejected');
  }

  console.log('[lead] accepted', { trackback: ctm.trackback_id, sid: Boolean(payload.get('visitor_sid')) });
  return reply('/thank-you/?sent=1', true);
}
