# LP Elevate Point

Google Ads landing page for Elevate Point (Brooklyn, NY). Migration of https://www.elevatepoint.org/drug-rehab-lp/
(the only paid LP still live on the WordPress site) to Astro + Vercel, in a new design. Planned host:
`lp.elevatepoint.org` (Ads LP at the root).

- `/` = the live LP's copy, verbatim, in the new design ("Brooklyn greenhouse": forest/olive/sage tokens from the main
  site, Manrope + Inter, moss-disc motif from the ceiling panels of the rooms).
- `/v1/` = same design, content rewritten from the call insights (next step).
- Copy: `src/data/content.js`; facts, phone and form options: `src/data/site.js`.
- Lead form → `/api/lead` (CTM FormReactor proxy, tests in `tests/lead.test.mjs`) → `/thank-you/?sent=1`.
- noindex meta + `X-Robots-Tag` on every response; no robots.txt, no sitemap, no outbound links.
- CookieConsent (prefix `elevatepoint`, cookie shared on `.elevatepoint.org`), own accessibility menu.

Tracking (given 2026-10-29): phone (646) 733-4950, GTM-KKD2C2XX, CTM account 552861, FormReactor FRT472ABB2C5…80B2 (fields: name, phone, email, membership_policy_id, insurance_carrier, sms_consent). The key goes in Vercel only.

```sh
npm install
npx astro dev --port 4332
npm run build   # runs the lead API tests after the build
```
