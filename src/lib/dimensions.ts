export interface Dimension {
  id: number;
  w: number; // width in cm
  l: number; // length in cm
}

/**
 * Formats a dimension object into metric (cm) or imperial (inches) strings.
 * Automatic conversion avoids manual calculation and ensures consistent typography.
 */
export function formatDimension(
  dim: Dimension,
  format: 'cm' | 'in' | 'both' = 'cm'
): string {
  const cm = `${dim.w} × ${dim.l} cm`;
  if (format === 'cm') return cm;

  const inW = Math.round(dim.w / 2.54);
  const inL = Math.round(dim.l / 2.54);
  const inches = `${inW} × ${inL}″`;

  if (format === 'in') return inches;
  return `${cm} (${inches})`;
}

/**
 * Returns a short size label suitable for badges and cards (e.g. "45×60 cm").
 */
export function formatShortDimension(dim: Dimension): string {
  return `${dim.w}×${dim.l} cm`;
}
