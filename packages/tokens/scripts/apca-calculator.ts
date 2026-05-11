/**
 * APCA Calculator Module
 * 
 * Wrapper around apca-w3 library providing type-safe APCA calculations
 * for the paul design system's APCA migration.
 */

import { APCAcontrast, sRGBtoY } from 'apca-w3';

/**
 * RGB color object with values in range 0-255
 */
export type RGB = { r: number; g: number; b: number };

/**
 * HSL color object
 * - h: hue (0-360 degrees)
 * - s: saturation (0-100 percent)
 * - l: lightness (0-100 percent)
 */
export type HSL = { h: number; s: number; l: number };

/**
 * Use case for APCA threshold checking
 */
export type UseCase = 'body-text' | 'large-text' | 'ui-component';

/**
 * APCA threshold values for different use cases
 * - body-text: Lc 75 (equivalent to WCAG 2.x AAA)
 * - large-text: Lc 60 (equivalent to WCAG 2.x AA)
 * - ui-component: Lc 60 (equivalent to WCAG 2.x AA)
 */
const APCA_THRESHOLDS: Record<UseCase, number> = {
  'body-text': 75,
  'large-text': 60,
  'ui-component': 60,
};

/**
 * Validate RGB values are in range 0-255
 * @throws Error if any RGB value is out of range
 */
function validateRGB(rgb: RGB, context: string = 'RGB'): void {
  if (rgb.r < 0 || rgb.r > 255 || rgb.g < 0 || rgb.g > 255 || rgb.b < 0 || rgb.b > 255) {
    throw new Error(
      `Invalid RGB values for ${context}: r=${rgb.r}, g=${rgb.g}, b=${rgb.b}. ` +
      `All values must be in range 0-255.`
    );
  }
}

/**
 * Calculate APCA Lc value for a foreground-background color pair
 * @param foreground - RGB color object { r, g, b } (0-255)
 * @param background - RGB color object { r, g, b } (0-255)
 * @returns Lc value (-108.3 to 108.3)
 */
export function calculateLc(foreground: RGB, background: RGB): number {
  // Validate RGB values before calling apca-w3
  validateRGB(foreground, 'foreground');
  validateRGB(background, 'background');

  // Convert RGB objects to arrays expected by apca-w3
  const fgArray = [foreground.r, foreground.g, foreground.b];
  const bgArray = [background.r, background.g, background.b];

  // Calculate APCA contrast using apca-w3
  const lc = APCAcontrast(sRGBtoY(fgArray), sRGBtoY(bgArray));

  return lc;
}

/**
 * Convert HSL to RGB
 * @param hsl - HSL color object { h, s, l } (h: 0-360, s/l: 0-100)
 * @returns RGB color object { r, g, b } (0-255)
 */
export function hslToRgb(hsl: HSL): RGB {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    // Achromatic (grayscale)
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Convert RGB to HSL
 * @param rgb - RGB color object { r, g, b } (0-255)
 * @returns HSL color object { h, s, l } (h: 0-360, s/l: 0-100)
 */
export function rgbToHsl(rgb: RGB): HSL {
  validateRGB(rgb, 'RGB');

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Check if Lc value meets threshold for given use case
 * @param lc - APCA Lc value
 * @param useCase - 'body-text' | 'large-text' | 'ui-component'
 * @returns boolean indicating compliance
 */
export function meetsThreshold(lc: number, useCase: UseCase): boolean {
  const threshold = APCA_THRESHOLDS[useCase];
  // Use absolute value for threshold comparison (polarity is preserved for documentation)
  return Math.abs(lc) >= threshold;
}

/**
 * APCACalculator interface for type-safe APCA calculations
 */
export const APCACalculator = {
  calculateLc,
  hslToRgb,
  rgbToHsl,
  meetsThreshold,
};
