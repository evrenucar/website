import { defineConfig } from 'astro/config';

// Canico Pets — public marketing site.
// Deploys to GitHub Pages under the custom domain canicopets.com (see public/CNAME).
export default defineConfig({
  site: 'https://canicopets.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
