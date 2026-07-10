import { defineConfig } from 'astro/config';

// Canico Pets — public marketing site.
// Deploys to GitHub Pages under the custom domain canicopets.com (see public/CNAME).
export default defineConfig({
  site: 'https://canicopets.com',
  // BASE_PATH is set by the deploy workflow while the site is served from
  // evrenucar.github.io/website/. Remove it there once canicopets.com DNS is live.
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
