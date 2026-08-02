# Canico Pet — Website

Public marketing site for **Canico Pet** at [canicopet.com](https://canicopet.com).

Static Astro build, hosted on GitHub Pages. Structured to grow into a real webshop later without a rewrite.

## Stack

- [Astro 7.1.6](https://astro.build/) — content-first, static-by-default, islands for interactivity when needed.
- Vanilla CSS (custom properties). No framework lock-in.
- Content Collections for products (typed schema in `src/content/config.ts`).
- Deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Setup

```bash
cd website
npm install
npm run dev       # local dev server (http://localhost:4321)
npm run build     # static build to ./dist
npm run preview   # preview the built site
```

Requires Node 22.12.0+.

## Deploy

Every push to `main` builds the site and deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

On GitHub:

1. Push this repo to `github.com/<owner>/canicopet-website` (or similar).
2. Settings → Pages → Build and deployment → **Source: GitHub Actions**.
3. Settings → Pages → Custom domain: `canicopet.com`. The `public/CNAME` file is already in place.
4. Point the domain's DNS at GitHub Pages (`A` records or `CNAME` per [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## Layout

```
website/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/                # static assets served as-is
│   ├── CNAME
│   ├── favicon.svg
│   ├── logo-placeholder.svg
│   ├── product-placeholder.svg
│   └── robots.txt
├── src/
│   ├── content.config.ts      # products collection schema
│   ├── components/        # Nav, Footer, Hero, ProductCard
│   ├── content/
│   │   └── products/      # one markdown file per product
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── products/
│   │   ├── wholesale.astro
│   │   ├── private-label.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── imprint.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── docs/                  # non-code notes: sitemap, copy drafts
└── .github/workflows/     # deploy pipeline
```

## Adding a product

1. Copy `src/content/products/litter-mat.md` to a new slug (e.g. `feeding-mat.md`).
2. Update frontmatter (`sku`, `name`, `tagline`, `price`, `sizes`, etc.).
3. Save. The product appears on `/products` and gets a page at `/products/<slug>`.

The schema is defined in `src/content.config.ts`. It already includes `sku`, `price`, `sizes`, `materials`, and `status` — the fields a future cart layer will read.

## Grow into a webshop later

Because content is already structured:

- **Add a cart:** drop in [Snipcart](https://snipcart.com/), [Shopify Buy Button](https://www.shopify.com/buy-button), or Stripe Payment Links. Wire buttons on product pages to consume the existing product schema.
- **Or go full custom:** flip Astro's `output` to `server`, deploy to Cloudflare Pages / Vercel, and add API routes for cart/checkout.
- Product markdown stays the same either way.

## Placeholders

Currently placeholder-heavy. Search for `placeholder-note` in `src/` to find every visible placeholder. Concept images and final assets will replace them as they land in `../assets/brand/concepts/`.

## Public vs private

This directory is the **public** website repo. Its own git. Never copy internal ops files (leads, pricing, supplier notes) from the parent repo. See `AGENTS.md`.
