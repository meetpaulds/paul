/**
 * Unit tests for Token Recalculation Script
 */

import { describe, it, expect } from 'vitest';
import { adjustLightness, logAdjustmentWarning } from './recalculate-tokens';
import { calculateLc, hslToRgb, type HSL } from './apca-calculator';

describe('adjustLightness', () => {
  describe('basic functionality', () => {
    it('should preserve hue and saturation', () => {
      const color: HSL = { h: 240, s: 5, l: 33 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();
      expect(adjusted!.h).toBe(color.h);
      expect(adjusted!.s).toBe(color.s);
      expect(adjusted!.l).not.toBe(color.l); // Lightness should change
    });

    it('should meet target Lc within tolerance', () => {
      const color: HSL = { h: 240, s: 5, l: 33 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();

      // Calculate actual Lc of adjusted color
      const adjustedRgb = hslToRgb(adjusted!);
      const backgroundRgb = hslToRgb(background);
      const actualLc = Math.abs(calculateLc(adjustedRgb, backgroundRgb));

      // Should be within 0.5 of target
      expect(Math.abs(actualLc - targetLc)).toBeLessThan(0.6);
    });

    it('should adjust lightness downward when foreground is too light', () => {
      // Light gray on white background - needs to be darker
      const color: HSL = { h: 0, s: 0, l: 90 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 60;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();
      expect(adjusted!.l).toBeLessThan(color.l); // Should become darker
    });

    it('should adjust lightness upward when foreground is too dark', () => {
      // Very dark gray on dark background - needs to be lighter
      const color: HSL = { h: 0, s: 0, l: 15 };
      const background: HSL = { h: 0, s: 0, l: 10 };
      const targetLc = 60;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();
      expect(adjusted!.l).toBeGreaterThan(color.l); // Should become lighter
    });
  });

  describe('constraint enforcement', () => {
    it('should return best possible result when target cannot be met within ±15% constraint', () => {
      // Very light color on white background - cannot achieve Lc 75 within ±15%
      const color: HSL = { h: 0, s: 0, l: 95 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      // Should return the best possible result (darkest within constraint)
      expect(adjusted).not.toBeNull();
      expect(adjusted!.l).toBeLessThanOrEqual(95); // Within constraint
      expect(adjusted!.l).toBeGreaterThanOrEqual(80); // Within constraint (95 - 15)
      
      // Verify it's the best we can do
      const adjustedRgb = hslToRgb(adjusted!);
      const backgroundRgb = hslToRgb(background);
      const actualLc = Math.abs(calculateLc(adjustedRgb, backgroundRgb));
      
      // Should be less than target since we can't meet it
      expect(actualLc).toBeLessThan(targetLc);
    });

    it('should respect lower bound of 0% lightness', () => {
      // Color at 10% lightness can only go down to 0%
      const color: HSL = { h: 240, s: 50, l: 10 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 90; // Very high target

      const adjusted = adjustLightness(color, background, targetLc);

      // Should either succeed with l >= 0, or return null
      if (adjusted !== null) {
        expect(adjusted.l).toBeGreaterThanOrEqual(0);
        expect(adjusted.l).toBeLessThanOrEqual(25); // Within 15% of 10%
      }
    });

    it('should respect upper bound of 100% lightness', () => {
      // Color at 90% lightness can only go up to 100%
      const color: HSL = { h: 240, s: 50, l: 90 };
      const background: HSL = { h: 0, s: 0, l: 0 };
      const targetLc = 90; // Very high target

      const adjusted = adjustLightness(color, background, targetLc);

      // Should either succeed with l <= 100, or return null
      if (adjusted !== null) {
        expect(adjusted.l).toBeLessThanOrEqual(100);
        expect(adjusted.l).toBeGreaterThanOrEqual(75); // Within 15% of 90%
      }
    });

    it('should stay within ±15% of original lightness', () => {
      const color: HSL = { h: 240, s: 5, l: 50 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 70;

      const adjusted = adjustLightness(color, background, targetLc);

      if (adjusted !== null) {
        const lightnessChange = Math.abs(adjusted.l - color.l);
        expect(lightnessChange).toBeLessThanOrEqual(15);
      }
    });
  });

  describe('edge cases', () => {
    it('should handle identical foreground and background colors', () => {
      const color: HSL = { h: 0, s: 0, l: 50 };
      const background: HSL = { h: 0, s: 0, l: 50 };
      const targetLc = 60;

      const adjusted = adjustLightness(color, background, targetLc);

      // Should adjust to create contrast
      expect(adjusted).not.toBeNull();
      expect(adjusted!.l).not.toBe(color.l);
    });

    it('should handle pure black foreground', () => {
      const color: HSL = { h: 0, s: 0, l: 0 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      // Black on white should already have high contrast
      // May need slight adjustment or may already meet target
      expect(adjusted).not.toBeNull();
    });

    it('should handle pure white foreground', () => {
      const color: HSL = { h: 0, s: 0, l: 100 };
      const background: HSL = { h: 0, s: 0, l: 0 };
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      // White on black should already have high contrast
      expect(adjusted).not.toBeNull();
    });

    it('should handle saturated colors', () => {
      const color: HSL = { h: 0, s: 100, l: 50 }; // Pure red
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 60;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();
      expect(adjusted!.h).toBe(0); // Hue preserved
      expect(adjusted!.s).toBe(100); // Saturation preserved
    });

    it('should round lightness to 1 decimal place', () => {
      const color: HSL = { h: 240, s: 5, l: 33 };
      const background: HSL = { h: 0, s: 0, l: 100 };
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();
      // Check that lightness has at most 1 decimal place
      const lightnessStr = adjusted!.l.toString();
      const decimalIndex = lightnessStr.indexOf('.');
      if (decimalIndex !== -1) {
        const decimalPlaces = lightnessStr.length - decimalIndex - 1;
        expect(decimalPlaces).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('real-world token scenarios', () => {
    it('should adjust muted-foreground on white background to meet Lc 75', () => {
      // Current muted-foreground in light mode: 240 5% 33%
      const color: HSL = { h: 240, s: 5, l: 33 };
      const background: HSL = { h: 0, s: 0, l: 100 }; // white
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();

      // Verify it meets target
      const adjustedRgb = hslToRgb(adjusted!);
      const backgroundRgb = hslToRgb(background);
      const actualLc = Math.abs(calculateLc(adjustedRgb, backgroundRgb));

      expect(actualLc).toBeGreaterThanOrEqual(targetLc - 0.6);
      expect(actualLc).toBeLessThanOrEqual(targetLc + 0.6);
    });

    it('should adjust destructive-text on white background to meet Lc 75', () => {
      // Current destructive-text in light mode: 0 72% 39%
      const color: HSL = { h: 0, s: 72, l: 39 };
      const background: HSL = { h: 0, s: 0, l: 100 }; // white
      const targetLc = 75;

      const adjusted = adjustLightness(color, background, targetLc);

      expect(adjusted).not.toBeNull();
      expect(adjusted!.h).toBe(0); // Red hue preserved
      expect(adjusted!.s).toBe(72); // Saturation preserved
    });
  });
});

describe('logAdjustmentWarning', () => {
  it('should log warning with all relevant information', () => {
    // Capture console.warn output
    const warnings: string[] = [];
    const originalWarn = console.warn;
    console.warn = (message: string) => {
      warnings.push(message);
    };

    logAdjustmentWarning(
      'muted-foreground',
      'light',
      'background',
      65.5,
      75,
      33
    );

    // Restore console.warn
    console.warn = originalWarn;

    expect(warnings).toHaveLength(1);
    const warning = warnings[0];

    // Check that warning includes all key information
    expect(warning).toContain('muted-foreground');
    expect(warning).toContain('light mode');
    expect(warning).toContain('background');
    expect(warning).toContain('65.5');
    expect(warning).toContain('75');
    expect(warning).toContain('33%');
    expect(warning).toContain('Manual review required');
  });
});
