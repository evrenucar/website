import type { ImageMetadata } from 'astro';

// Eagerly import all variant images across the content collections
const variantImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/products/**/variants/**/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

export interface VariantAssets {
  thumbnail: ImageMetadata | undefined;
  design: ImageMetadata | undefined;
  extras: ImageMetadata[];
  gallery: ImageMetadata[];
}

/**
 * Automatically discovers variant assets by SKU subfolder name.
 * 
 * Expected file conventions in src/content/products/<productId>/variants/<sku>/:
 * - thumbnail.webp : Main product photo
 * - design.webp    : Print / pattern artwork for picker swatch
 * - extra-1.webp, extra-2.webp... : Additional gallery photos
 */
export function getVariantAssets(
  productId: string,
  sku: string,
  fallbackHero?: ImageMetadata
): VariantAssets {
  const normalizedProductId = productId.replace(/\/index$/, '');
  const prefix = `/src/content/products/${normalizedProductId}/variants/${sku}/`;

  let thumbnail: ImageMetadata | undefined;
  let design: ImageMetadata | undefined;
  const extras: ImageMetadata[] = [];

  const matchedKeys = Object.keys(variantImages)
    .filter((k) => k.startsWith(prefix))
    .sort();

  for (const key of matchedKeys) {
    const filename = key.slice(prefix.length).toLowerCase();

    if (filename.startsWith('thumbnail.')) {
      thumbnail = variantImages[key].default;
    } else if (filename.startsWith('design.')) {
      design = variantImages[key].default;
    } else if (filename.startsWith('extra-') || filename.startsWith('extra_')) {
      extras.push(variantImages[key].default);
    }
  }

  // Fallbacks: if thumbnail is missing, use product hero
  const resolvedThumbnail = thumbnail ?? fallbackHero;
  // If design swatch is missing, use the thumbnail image
  const resolvedDesign = design ?? resolvedThumbnail;

  const gallery: ImageMetadata[] = [];
  if (resolvedThumbnail) gallery.push(resolvedThumbnail);
  gallery.push(...extras);

  return {
    thumbnail: resolvedThumbnail,
    design: resolvedDesign,
    extras,
    gallery,
  };
}
