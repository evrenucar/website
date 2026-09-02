// Registry of supported marketplace / retail platforms
// Designed for easy extension: add a new platform in one entry here, or integrate native shop checkout.

export interface RetailerConfig {
  id: string;
  name: string;
  logo: string;
  /**
   * If true (default), opens in external new window.
   * If false, indicates an internal / built-in checkout flow.
   */
  isExternal?: boolean;
}

export const RETAILER_REGISTRY: Record<string, RetailerConfig> = {
  hepsiburada: {
    id: 'hepsiburada',
    name: 'Hepsiburada',
    logo: '/retail/hepsiburada.svg',
    isExternal: true,
  },
  trendyol: {
    id: 'trendyol',
    name: 'Trendyol',
    logo: '/retail/trendyol.svg',
    isExternal: true,
  },
};

export type RetailLinks = Record<string, string>;

/**
 * Resolves effective retail links for a variant.
 * - Variant entry overrides hero product entry.
 * - Empty string or missing variant entry falls back to hero product entry.
 * - If neither has a non-empty URL, it is omitted.
 */
export function resolveRetailLinks(
  heroLinks?: RetailLinks | null,
  variantLinks?: RetailLinks | null
): RetailLinks {
  const resolved: RetailLinks = {};
  const allKeys = new Set([
    ...Object.keys(heroLinks || {}),
    ...Object.keys(variantLinks || {}),
  ]);

  for (const key of allKeys) {
    const variantVal = variantLinks?.[key]?.trim();
    const heroVal = heroLinks?.[key]?.trim();

    // If variant has an explicit URL, it overrides hero.
    // If variant is unset/empty, fallback to hero.
    const effectiveUrl = variantVal || heroVal;
    if (effectiveUrl) {
      resolved[key] = effectiveUrl;
    }
  }

  return resolved;
}
