// @ts-check
import { defineConfig } from 'astro/config';

// Google Ads landing page for Elevate Point (Brooklyn): migration of www.elevatepoint.org/drug-rehab-lp/ to its own
// host in a new design (2026-10-29). `site` feeds the canonical, og:url and og:image. The page is noindex (vercel.json
// also sends X-Robots-Tag).
export default defineConfig({
  site: 'https://lp.elevatepoint.org',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  image: { layout: 'constrained' },
});
