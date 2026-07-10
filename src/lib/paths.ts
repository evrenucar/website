// Base-path-aware prefix for internal URLs. Empty string when the site is
// served from the domain root (canicopet.com); '/website' while it is served
// from the GitHub Pages project subpath (evrenucar.github.io/website/).
// Driven by the `base` option in astro.config.mjs via the BASE_PATH env var.
export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
