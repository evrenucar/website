import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Products collection.
// This shape is intentionally webshop-ready: sku, price, sizes, and status
// exist today so a future cart/checkout layer can read directly from here
// without touching page code.
const products = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/products' }),
  schema: z.object({
    sku: z.string(),
    // English (default) fields
    name: z.string(),
    tagline: z.string().optional(),
    description: z.string(),
    // Turkish mirrors
    name_tr: z.string().optional(),
    tagline_tr: z.string().optional(),
    description_tr: z.string().optional(),
    status: z.enum(['available', 'coming-soon', 'archived']).default('coming-soon'),
    order: z.number().default(100),
    images: z.array(z.string()).default([]),
    price: z
      .object({
        amount: z.number(),
        currency: z.enum(['EUR', 'TRY', 'USD']),
      })
      .optional(),
    sizes: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    private_label_ready: z.boolean().default(true),
    // Later, when webshop goes live: stock, weight, dimensions, tax_class, variants.
  }),
});

export const collections = { products };
