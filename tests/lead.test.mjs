import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import handler, { toE164, buildPayload, spamReason, ctmAuth, stubAllowed, envPrefix } from '../api/lead.js';

function run(body, { accept = '', env = {} } = {}) {
  const saved = { ...process.env };
  // ⚠️ Clear EVERY CTM var, prefixed ones included. The tests run inside the
  // Vercel build, where the real keys are set; a leftover key makes a test
  // post to the live reactor.
  for (const k of Object.keys(process.env)) if (/(^|_)CTM_|^VERCEL_ENV$/.test(k)) delete process.env[k];
  Object.assign(process.env, env);
  const req = new EventEmitter();
  req.method = 'POST';
  req.headers = { accept, 'x-forwarded-for': `10.0.0.${Math.floor(Math.random() * 250)}` };
  const res = { statusCode: 200, headers: {}, body: '', setHeader(k, v) { this.headers[k.toLowerCase()] = v; }, end(b = '') { this.body = b; this.done(); } };
  const p = new Promise((r) => (res.done = r));
  const origErr = console.error, origWarn = console.warn, origLog = console.log;
  console.error = console.warn = console.log = () => {};
  handler(req, res);
  setImmediate(() => { req.emit('data', Buffer.from(body)); req.emit('end'); });
  return p.then(() => { console.error = origErr; console.warn = origWarn; console.log = origLog; process.env = saved; return res; });
}

const good = new URLSearchParams({ caller_name: 'Pat Doe', phone_number: '(415) 555-0134', rendered_at: String(Date.now() - 10000), 'paid_attribution[gclid]': 'abc', 'custom_fields[insurance_carrier]': 'Aetna', evil: 'x', tag_list: 'nope' }).toString();

test('toE164', () => {
  assert.equal(toE164('(415) 555-0134'), '+14155550134');
  assert.equal(toE164('1 415 555 0134'), '+14155550134');
  assert.equal(toE164('555'), null);
});

test('payload is allowlisted', () => {
  const p = buildPayload(new URLSearchParams(good));
  assert.equal(p.get('phone_number'), '+14155550134');
  assert.equal(p.get('evil'), null);
  assert.equal(p.get('tag_list'), null);
  assert.equal(p.get('paid_attribution[gclid]'), 'abc');
});

test('spam rules', () => {
  assert.equal(spamReason(new URLSearchParams({ company_website: 'x' })), 'honeypot');
  assert.equal(spamReason(new URLSearchParams({ rendered_at: String(Date.now()) })), 'too-fast');
  assert.equal(spamReason(new URLSearchParams({ caller_name: 'María José' })), null);
});

test('auth needs a reactor id and a key', () => {
  assert.equal(ctmAuth({}), null);
  assert.equal(ctmAuth({ CTM_FORMREACTOR_KEY: 'k' }), null);
  assert.equal(ctmAuth({ CTM_FORMREACTOR_ID: 'FRT' + 'A'.repeat(40), CTM_FORMREACTOR_KEY: 'k' }).mode, 'key');
  assert.equal(stubAllowed({ CTM_ALLOW_STUB: '1', VERCEL_ENV: 'production' }), false);
});

test('unconfigured: fails gracefully to the call-us state (JSON)', async () => {
  const res = await run(good, { accept: 'application/json' });
  const data = JSON.parse(res.body);
  assert.equal(data.ok, false);
  assert.equal(data.redirect, '/thank-you/?issue=config');
});

test('unconfigured: plain form post gets a 303', async () => {
  const res = await run(good);
  assert.equal(res.statusCode, 303);
  assert.equal(res.headers.location, '/thank-you/?issue=config');
});

test('stub mode (local only) reaches the sent state', async () => {
  const res = await run(good, { accept: 'application/json', env: { CTM_ALLOW_STUB: '1' } });
  assert.equal(JSON.parse(res.body).redirect, '/thank-you/?sent=1');
});

test('stub mode is refused in production', async () => {
  const res = await run(good, { accept: 'application/json', env: { CTM_ALLOW_STUB: '1', VERCEL_ENV: 'production' } });
  assert.equal(JSON.parse(res.body).redirect, '/thank-you/?issue=config');
});

test('bad phone fails with phone issue', async () => {
  const body = new URLSearchParams({ caller_name: 'Pat', phone_number: '12', rendered_at: String(Date.now() - 10000) }).toString();
  const res = await run(body, { accept: 'application/json', env: { CTM_ALLOW_STUB: '1' } });
  assert.equal(JSON.parse(res.body).redirect, '/thank-you/?issue=phone');
});

test('admissions forms use the RECOVERY_ reactor, the rest the Ads one', () => {
  assert.equal(envPrefix('admissions-hero'), 'RECOVERY_');
  assert.equal(envPrefix('admissions-full'), 'RECOVERY_');
  assert.equal(envPrefix('hero'), '');
  assert.equal(envPrefix('triwest-full'), '');
  const env = { RECOVERY_CTM_FORMREACTOR_ID: 'FRT' + 'B'.repeat(40), RECOVERY_CTM_FORMREACTOR_KEY: 'k' };
  assert.equal(ctmAuth(env, 'RECOVERY_').reactor, 'FRT' + 'B'.repeat(40));
  assert.equal(ctmAuth(env, ''), null);
});

test('admissions leads land on the thank-you page with p=admissions', async () => {
  const body = new URLSearchParams({ caller_name: 'Pat', phone_number: '415 555 0100', rendered_at: String(Date.now() - 10000), 'paid_attribution[form_id]': 'admissions-hero' }).toString();
  const res = await run(body, { accept: 'application/json', env: { CTM_ALLOW_STUB: '1' } });
  assert.equal(JSON.parse(res.body).redirect, '/thank-you/?sent=1&p=admissions');
  const plain = await run(body, { accept: 'application/json' });
  assert.equal(JSON.parse(plain.body).redirect, '/thank-you/?issue=config&p=admissions');
});
