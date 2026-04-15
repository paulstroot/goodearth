/**
 * Site font registration — single place to change families, weights, or provider.
 *
 * - Used by `astro.config.mjs` (`fonts`) and layout `<SiteFonts />` (preload / Font component).
 * - `cssVariable` values must match tokens consumed in CSS.
 *
 * @see https://docs.astro.build/en/guides/fonts/
 */
import { fontProviders } from "astro/config";

export const siteFonts = [
  {
    // Ultra-bold condensed display — for large hero headlines & key callouts
    name: "Bebas Neue",
    cssVariable: "--font-headline",
    provider: fontProviders.google(),
    weights: [400],
    styles: ["normal"],
  },
  {
    // Warm editorial serif — for content headings & body copy
    name: "Lora",
    cssVariable: "--font-display",
    provider: fontProviders.google(),
    weights: [400, 500, 600, 700],
    styles: ["normal", "italic"],
  },
  {
    // Elegant geometric sans — for UI labels, buttons, navigation
    name: "Raleway",
    cssVariable: "--font-sans",
    provider: fontProviders.google(),
    weights: [300, 400, 500, 600, 700],
    styles: ["normal"],
  },
];
