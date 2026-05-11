/**
 * APCA Calculator Tests
 * 
 * Property-based and unit tests for APCA calculation module
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { APCACalculator } from '../apca-calculator';
import { sRGBtoY } from 'apca-w3';
import type { RGB, HSL } from '../apca-calculator';

describe('APCACalculator', () => {
  describe('Property 1: APCA Lc Values Within Valid Range', () => {
    it('should return Lc values within -108.3 to 108.3 for all color pairs', () => {
      fc.assert(
        fc.property(
          // Generate random RGB color pairs
          fc.record({
            r: fc.integer({ min: 0, max: 255 }),
            g: fc.integer({ min: 0, max: 255 }),
            b: fc.integer({ min: 0, max: 255 }),
          }),
          fc.record({
            r: fc.integer({ min: 0, max: 255 }),
            g: fc.integer({ min: 0, max: 255 }),
            b: fc.integer({ min: 0, max: 255 }),
          }),
          (foreground: RGB, background: RGB) => {
            const lc = APCACalculator.calculateLc(foreground, background);
            
            // Assert Lc is within valid range
            expect(Math.abs(lc)).toBeLessThanOrEqual(108.3);
            
            // Also check it's a valid number
            expect(Number.isFinite(lc)).toBe(true);
            expect(Number.isNaN(lc)).toBe(false);
          }
        ),
        { numRuns: 100 } // Run 100 iterations as specified in requirements
      );
    });
  });

  describe('Property 2: APCA Polarity Preservation', () => {
    it('should preserve polarity based on relative luminance', () => {
      fc.assert(
        fc.property(
          fc.record({
            r: fc.integer({ min: 0, max: 255 }),
            g: fc.integer({ min: 0, max: 255 }),
            b: fc.integer({ min: 0, max: 255 }),
          }),
          fc.record({
            r: fc.integer({ min: 0, max: 255 }),
            g: fc.integer({ min: 0, max: 255 }),
            b: fc.integer({ min: 0, max: 255 }),
          }),
          (foreground: RGB, background: RGB) => {
            const lc = APCACalculator.calculateLc(foreground, background);
            
            // Skip if Lc is near 0 (colors too similar to determine polarity)
            if (Math.abs(lc) < 10) {
              return true;
            }
            
            // Use sRGBtoY (the same linearisation apca-w3 uses) for accurate luminance comparison
            const fgY = sRGBtoY([foreground.r, foreground.g, foreground.b]);
            const bgY = sRGBtoY([background.r, background.g, background.b]);
            
            // Skip near-black colors: APCA applies a "black threshold" soft clip
            // that can invert apparent polarity for very dark colors
            if (fgY < 0.02 || bgY < 0.02) {
              return true;
            }
            
            // APCA polarity (apca-w3 convention):
            // Positive Lc → dark text on light background (fgY < bgY)
            // Negative Lc → light text on dark background (fgY > bgY)
            if (fgY < bgY) {
              expect(lc).toBeGreaterThan(0);
            } else if (fgY > bgY) {
              expect(lc).toBeLessThan(0);
            }
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Unit Tests: Edge Cases', () => {
    it('should return Lc ≈ 0 for identical colors', () => {
      const color: RGB = { r: 128, g: 128, b: 128 };
      const lc = APCACalculator.calculateLc(color, color);
      
      expect(Math.abs(lc)).toBeLessThan(1);
    });

    it('should return maximum Lc for pure black on pure white', () => {
      const black: RGB = { r: 0, g: 0, b: 0 };
      const white: RGB = { r: 255, g: 255, b: 255 };
      
      const lc = APCACalculator.calculateLc(black, white);
      
      // In apca-w3: black text on white background → positive Lc (dark text on light bg)
      expect(lc).toBeGreaterThan(0);
      expect(Math.abs(lc)).toBeGreaterThan(100);
    });

    it('should return maximum Lc for pure white on pure black', () => {
      const white: RGB = { r: 255, g: 255, b: 255 };
      const black: RGB = { r: 0, g: 0, b: 0 };
      
      const lc = APCACalculator.calculateLc(white, black);
      
      // In apca-w3: white text on black background → negative Lc (light text on dark bg)
      expect(lc).toBeLessThan(0);
      expect(Math.abs(lc)).toBeGreaterThan(100);
    });

    it('should match reference values from APCA documentation', () => {
      // Test case from APCA documentation
      // #888 on #fff should be around Lc 63
      const gray: RGB = { r: 136, g: 136, b: 136 };
      const white: RGB = { r: 255, g: 255, b: 255 };
      
      const lc = APCACalculator.calculateLc(gray, white);
      
      expect(Math.abs(lc)).toBeGreaterThan(60);
      expect(Math.abs(lc)).toBeLessThan(70);
    });
  });

  describe('HSL/RGB Conversion Tests', () => {
    it('should convert pure black correctly', () => {
      const hsl: HSL = { h: 0, s: 0, l: 0 };
      const rgb = APCACalculator.hslToRgb(hsl);
      
      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    });

    it('should convert pure white correctly', () => {
      const hsl: HSL = { h: 0, s: 0, l: 100 };
      const rgb = APCACalculator.hslToRgb(hsl);
      
      expect(rgb.r).toBe(255);
      expect(rgb.g).toBe(255);
      expect(rgb.b).toBe(255);
    });

    it('should convert pure red correctly', () => {
      const hsl: HSL = { h: 0, s: 100, l: 50 };
      const rgb = APCACalculator.hslToRgb(hsl);
      
      expect(rgb.r).toBe(255);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    });

    it('should convert grayscale correctly', () => {
      const hsl: HSL = { h: 0, s: 0, l: 50 };
      const rgb = APCACalculator.hslToRgb(hsl);
      
      // Should be middle gray
      expect(rgb.r).toBeCloseTo(128, 1);
      expect(rgb.g).toBeCloseTo(128, 1);
      expect(rgb.b).toBeCloseTo(128, 1);
    });

    it('should round-trip HSL -> RGB -> HSL for grayscale', () => {
      const originalHsl: HSL = { h: 0, s: 0, l: 75 };
      const rgb = APCACalculator.hslToRgb(originalHsl);
      const convertedHsl = APCACalculator.rgbToHsl(rgb);
      
      // Lightness should be preserved
      expect(convertedHsl.l).toBeCloseTo(originalHsl.l, 0);
      
      // Saturation should be 0 for grayscale
      expect(convertedHsl.s).toBe(0);
    });
  });

  describe('Threshold Checking', () => {
    it('should correctly identify body text threshold (Lc 75)', () => {
      expect(APCACalculator.meetsThreshold(75, 'body-text')).toBe(true);
      expect(APCACalculator.meetsThreshold(74.9, 'body-text')).toBe(false);
      expect(APCACalculator.meetsThreshold(-75, 'body-text')).toBe(true);
      expect(APCACalculator.meetsThreshold(-74.9, 'body-text')).toBe(false);
    });

    it('should correctly identify large text threshold (Lc 60)', () => {
      expect(APCACalculator.meetsThreshold(60, 'large-text')).toBe(true);
      expect(APCACalculator.meetsThreshold(59.9, 'large-text')).toBe(false);
      expect(APCACalculator.meetsThreshold(-60, 'large-text')).toBe(true);
      expect(APCACalculator.meetsThreshold(-59.9, 'large-text')).toBe(false);
    });

    it('should correctly identify UI component threshold (Lc 60)', () => {
      expect(APCACalculator.meetsThreshold(60, 'ui-component')).toBe(true);
      expect(APCACalculator.meetsThreshold(59.9, 'ui-component')).toBe(false);
    });
  });
});
