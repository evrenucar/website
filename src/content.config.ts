import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Categories (data collection).
// Each YAML file in src/content/categories/ becomes a category entry.
const categories = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    name_tr: z.string().optional(),
    description: z.string().optional(),
    description_tr: z.string().optional(),
    order: z.number().default(100),
  }),
});

// Products collection.
// Each product lives in its own directory: src/content/products/<slug>/index.md
// Images are co-located in the same directory and validated at build time.
const products = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
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
      // Categories — reference IDs from src/content/categories/*.yaml
      categories: z.array(z.string()).default([]),
      // Umbrella / fallback images for the product model
      images: z.array(image()).default([]),
      price: z
        .object({
          amount: z.number(),
          currency: z.enum(['EUR', 'TRY', 'USD']),
        })
        .optional(),
      // Dimensions defined once as positive numbers with positive integer IDs
      sizes: z
        .array(
          z.object({
            id: z.number().int().positive(), // Non-zero integer (e.g. 1, 2, 3)
            w: z.number().positive(),        // Width in cm (e.g. 45)
            l: z.number().positive(),        // Length in cm (e.g. 60)
          })
        )
        .default([]),
      materials: z.array(z.string()).default([]),
      materials_tr: z.array(z.string()).optional(),
      tags: z.array(z.string()).default([]),
      // Variants — each SKU combination references a size_id
      // Variant assets are auto-discovered from variants/<sku>/ folder
      variants: z
        .array(
          z.object({
            sku: z.string(),
            size_id: z.number().int().positive(), // References sizes[].id
            price: z
              .object({
                amount: z.number(),
                currency: z.enum(['EUR', 'TRY', 'USD']),
              })
              .optional(),
            status: z
              .enum(['available', 'coming-soon', 'archived'])
              .default('available'),
          })
        )
        .default([]),
    }),
});

export const collections = { categories, products };
