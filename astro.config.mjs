import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canico Pets — public marketing site.
// Deploys to GitHub Pages under the custom domain canicopet.com (see public/CNAME).
export default defineConfig({
  site: 'https://canicopet.com',
  // BASE_PATH is set by the deploy workflow while the site is served from
  // evrenucar.github.io/website/. Remove it there once canicopet.com DNS is live.
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
