// Images by file name so content.js can name them: src/assets/lp (the live LP's icons and insurance logos, downloaded
// 2026-10-28), src/assets/facility (full-size gallery photos from the main site's /about/facility page) and
// src/assets/brand (logo, team photos, badges).
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('../assets/{lp,facility,brand,reviews}/*.{svg,webp,png,jpg}', { eager: true, import: 'default' });

/** Exact file name, e.g. `Call-Us.svg` or `bedroom-twin-wide.jpg`. */
export function asset(name: string): ImageMetadata {
  const hit = Object.entries(files).find(([path]) => path.split('/').pop() === name);
  if (!hit) throw new Error(`Missing LP asset: ${name}`);
  return hit[1];
}
