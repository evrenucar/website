# Canico Pet — Website

Public marketing site for **Canico Pet** at [canicopet.com](https://canicopet.com).

Static Astro site deployed to GitHub Pages via GitHub Actions. Built with content collections, typed schemas, and responsive vanilla CSS.

## Tech Stack

- **Framework**: [Astro 7.1.6](https://astro.build/) — static HTML generation with dynamic client-side interactions.
- **Styling**: Vanilla CSS with custom properties (colors, typography, grid spacing). No external CSS framework dependencies.
- **Content Collections**: Astro 5 typed content layer with Zod validation in `src/content.config.ts`.
- **Media & Assets**: High-density WebP photography and master pattern assets with eager pre-decoding and idle prefetching.
- **Localization**: Client-side English (default) and Turkish (`lang-tr`) instant switching via `Trans.astro` and localized frontmatter fields.
- **Deployment**: Automated build and deployment to GitHub Pages via `.github/workflows/deploy.yml`.

## Quick Start

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Run TypeScript and Astro type check
npm run check

# Build production static bundle to ./dist
npm run build

# Preview production build locally
npm run preview
```

**Requirements**: Node.js 22.12.0+

## Project Structure

```
website/
├── astro.config.mjs               # Astro configuration (site URL, sitemap, directory build)
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript compiler settings and path aliases
├── public/                        # Static assets served as-is
│   ├── CNAME                      # Custom domain for GitHub Pages (canicopet.com)
│   ├── favicon.png                # Favicons in multiple resolutions
│   ├── og.png                     # Default OpenGraph social sharing card (1200x630)
│   └── robots.txt                 # Search engine crawler instructions
├── src/
│   ├── content.config.ts          # Zod schema definitions for categories and products
│   ├── components/
│   │   ├── ContactChannels.astro  # Contact links (WhatsApp, email, phone)
│   │   ├── Footer.astro           # Global footer with newsletter and links
│   │   ├── Nav.astro              # Global sticky navigation with language toggle
│   │   ├── ProductCard.astro      # Multi-mode product card with smart hover cycling
│   │   └── Trans.astro            # Client-side inline bilingual text renderer
│   ├── content/
│   │   ├── categories/            # Category metadata definitions (*.yaml)
│   │   └── products/              # Product directories with co-located assets
│   │       ├── litter-mat/        # Cat litter collecting mat & variants
│   │       │   ├── index.md       # Product data, size matrix, and copy
│   │       │   ├── hero.webp      # Main product model lifestyle image
│   │       │   └── variants/      # Variant folders by SKU (e.g., CNC450101/)
│   │       │       ├── thumbnail.webp  # Product photo thumbnail
│   │       │       ├── design.webp     # Print pattern swatch
│   │       │       └── extra-*.webp    # Additional angle photos
│   │       └── scratching-pad/    # Couch-arm scratching pad
│   ├── layouts/
│   │   └── BaseLayout.astro       # HTML shell, SEO meta, fonts, JSON-LD, scripts
│   ├── lib/
│   │   ├── dimensions.ts          # Dimension formatting and helper functions
│   │   ├── paths.ts               # Base path helper for domain routing
│   │   └── variants.ts            # Dynamic asset resolver for variant images
│   ├── pages/
│   │   ├── index.astro            # Homepage with swipeable hero carousel and featured grid
│   │   ├── products/
│   │   │   ├── index.astro        # Products catalog with Models vs. All Variations toggle
│   │   │   └── [...id].astro      # Interactive product detail page with variant matrix
│   │   ├── about.astro            # Factory background and manufacturing story
│   │   ├── contact.astro          # Contact form and communication channels
│   │   ├── wholesale.astro        # B2B manufacturing, customization, and inquiry details
│   │   ├── privacy.astro          # Privacy policy
│   │   ├── imprint.astro          # Legal notice / Impressum
│   │   └── 404.astro              # Custom 404 error page
│   └── styles/
│       └── global.css             # Global typography, color tokens, and layout styles
└── docs/                          # Architecture notes, templates, and copy drafts
```

## Adding a Product or Variant

### 1. Adding a New Product Model

1. Create a new directory under `src/content/products/<product-slug>/` (e.g. `src/content/products/feeding-mat/`).
2. Add an `index.md` file using the template from `docs/templates/product/index.md`.
3. Provide a `hero.webp` photo in the product directory.
4. Define dimensions in the `sizes` list and SKU configurations in the `variants` list.

```yaml
---
sku: CP-FM-001
name: Pet Feeding Mat
name_tr: Evcil Hayvan Besleme Matı
tagline: Waterproof and machine-washable dining mat for cats and dogs.
tagline_tr: Kedi ve köpekler için su geçirmez, makinede yıkanabilir mama matı.
description: Machine-washable pet feeding mat designed to catch spills and protect floors.
description_tr: Dökülen mama ve suları hapsederek zeminleri koruyan yıkanabilir mama matı.
status: available
order: 30
categories:
  - cats
  - dogs
images:
  - ./hero.webp
sizes:
  - { id: 1, w: 30, l: 45 }
  - { id: 2, w: 40, l: 60 }
materials:
  - Microfiber textile
  - Waterproof backing
variants:
  - sku: CNC3001
    size_id: 1
    status: available
---
```

### 2. Adding Variant Assets

For each SKU defined in `variants`:
1. Create a folder at `src/content/products/<product-slug>/variants/<SKU>/`.
2. Add the corresponding WebP image files:
   - `thumbnail.webp` *(Required)*: Front photo of the finished mat.
   - `design.webp` *(Required for patterned items)*: Flat print pattern artwork for the swatch selector.
   - `extra-1.webp` to `extra-4.webp` *(Optional)*: Alternative angles or detail shots.

The build system automatically detects and maps these assets to the product detail page and catalog views via `src/lib/variants.ts`.

## Key Features

### Interactive Product Matrix (`[...id].astro`)
- **Live Variant Switching**: Select size pills and visual pattern swatches with instant state updates.
- **URL Synchronization**: Direct linking to any variation via SKU query parameter (e.g. `/products/litter-mat?sku=CNC450101`).
- **Continuous Track Carousel**: Mouse drag-to-slide and touch swipe gestures with rubber-band edge boundaries and velocity snapping.
- **Double-Buffered Cross-Fade**: Pre-decodes incoming variant imagery to eliminate background flash on selection changes.

### Dual-View Catalog (`/products`)
- **Product Models View**: Displays grouped product models with background auto-scrolling that pauses on hover.
- **All Variations View**: Flattens the catalog so customers can browse all individual pattern swatches and photography directly, with hover-activated photo previews.

### Internationalization (EN / TR)
- Instant client-side language switching without page reloads or layout shifts.
- Uses `Trans.astro` for component-level strings and data attributes (`data-lang="tr"`) with stored `localStorage` preferences.

## Deployment & Hosting

The site is configured for automatic deployment to **GitHub Pages** with the custom domain `canicopet.com`.

- Pushes to the `main` branch trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.
- Astro builds the static HTML/CSS/JS assets to `dist/`, which are published to GitHub Pages.
- DNS is configured to point `canicopet.com` to GitHub Pages servers with automatic SSL certificate management.

## Repository Rules

This is the **public** marketing repository. Do not copy internal operational data (pricing sheets, raw supplier invoices, customer contact databases) from private repositories. All committed code and copy are public-facing.
