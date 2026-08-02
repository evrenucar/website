import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Canico Pets — public marketing site.
// Deploys to GitHub Pages under the custom domain canicopet.com (see public/CNAME).
export default defineConfig({
  site: 'https://canicopet.com',

  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  integrations: [sitemap()],
});