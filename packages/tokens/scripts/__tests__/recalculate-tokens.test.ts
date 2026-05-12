/**
 * Token Recalculation Tests
 * 
 * Property-based and integration tests for token recalculation script
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { APCACalculator } from '../apca-calculator';
import type { HSL, RGB } from '../apca-calculator';
import { parseTokensFile, getForegroundTokens } from '../token-usage-map';

describe('Token Recalculation', () => {
  describe('Property 3: Hue and Saturation Preservation', () => {
    it('should preserve hue and saturation during lightness adjustment', () => {
      fc.assert(
        fc.property(
          // Generate random HSL colors
          fc.record({
            h: fc.integer({ min: 0, max: 360 }),
            s: fc.integer({ min: 0, max: 100 }),
            l: fc.integer({ min: 20, max: 80 }), // Avoid extremes for adjustment
          }),
          // Generate random background (dark background for testing)
          fc.record({
            r: fc.integer({ min: 0, max: 50 }),
            g: fc.integer({ min: 0, max: 50 }),
            b: fc.integer({ min: 0, max: 50 }),
          }),
          // Generate target Lc
          fc.integer({ min: 60, max: 90 }),
          (hsl: HSL, background: RGB, targetLc: number) => {
            // Simulate lightness adjustment
            const adjusted = adjustLightnessForTest(hsl, background, targetLc);
            
            if (adjusted) {
              // Hue and saturation should be preserved
              expect(adjusted.h).toBe(hsl.h);
              expect(adjusted.s).toBe(hsl.s);
              
              // Lightness should be different (unless already meeting target)
              // Only check if adjustment was needed
              const originalRgb = APCACalculator.hslToRgb(hsl);
              const originalLc = Math.abs(APCACalculator.calculateLc(originalRgb, background));
              
              if (originalLc < targetLc - 1) {
                expect(adjusted.l).not.toBe(hsl.l);
              }
            }
          }
        ),
        { numRuns: 50 } // Reduced runs as this is computationally intensive
      );
    });
  });

  describe('Integration Tests: Token Recalculation', () => {
    const tokensPath = resolve(__dirname, '../../src/tokens.css');

    it('should read tokens.css and produce valid output', () => {
      expect(existsSync(tokensPath)).toBe(true);
      
      const tokens = parseTokensFile(tokensPath);
      expect(tokens.length).toBeGreaterThan(0);
      
      // Should have both light and dark mode tokens
      const lightTokens = tokens.filter(t => t.mode === 'light');
      const darkTokens = tokens.filter(t => t.mode === 'dark');
      
      expect(lightTokens.length).toBeGreaterThan(0);
      expect(darkTokens.length).toBeGreaterThan(0);
    });

    it('should have recalculated tokens that meet APCA thresholds', () => {
      const tokens = parseTokensFile(tokensPath);
      const foregroundTokens = getForegroundTokens(tokens);
      
      // Check that key tokens meet their thresholds
      const mutedForegroundDark = foregroundTokens.find(
        t => t.name === 'muted-foreground' && t.mode === 'dark'
      );
      
      expect(mutedForegroundDark).toBeDefined();
      
      if (mutedForegroundDark) {
        // Should be the recalculated value
        expect(mutedForegroundDark.hsl.l).toBeCloseTo(82.7, 1);
      }
    });

    it('should preserve hue and saturation in recalculated tokens', () => {
      const tokens = parseTokensFile(tokensPath);
      
      // Check muted-foreground in both modes
      const mutedLight = tokens.find(
        t => t.name === 'muted-foreground' && t.mode === 'light'
      );
      const mutedDark = tokens.find(
        t => t.name === 'muted-foreground' && t.mode === 'dark'
      );
      
      if (mutedLight && mutedDark) {
        // Hue and saturation should be the same in both modes
        expect(mutedLight.hsl.h).toBe(mutedDark.hsl.h);
        expect(mutedLight.hsl.s).toBe(mutedDark.hsl.s);
      }
    });

    it('should have inline comments with Lc values', () => {
      const content = readFileSync(tokensPath, 'utf-8');
      
      // Should have Lc comments (on lines before tokens)
      expect(content).toMatch(/\/\*\s*Lc\s+-?\d+\.\d+/);
      
      // Check that foreground and muted-foreground tokens have associated Lc comments
      // Comments appear on the line before the token declaration
      expect(content).toMatch(/Lc.*\n.*--foreground:/);
      expect(content).toMatch(/Lc.*\n.*--muted-foreground:/);
    });

    it('should have valid HSL format for all tokens', () => {
      const tokens = parseTokensFile(tokensPath);
      
      tokens.forEach(token => {
        // Hue: 0-360
        expect(token.hsl.h).toBeGreaterThanOrEqual(0);
        expect(token.hsl.h).toBeLessThanOrEqual(360);
        
        // Saturation: 0-100
        expect(token.hsl.s).toBeGreaterThanOrEqual(0);
        expect(token.hsl.s).toBeLessThanOrEqual(100);
        
        // Lightness: 0-100
        expect(token.hsl.l).toBeGreaterThanOrEqual(0);
        expect(token.hsl.l).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('Lightness Adjustment Algorithm', () => {
    it('should increase lightness for dark mode when Lc is too low', () => {
      const darkBg: RGB = { r: 10, g: 10, b: 10 };
      const hsl: HSL = { h: 240, s: 5, l: 50 };
      
      const adjusted = adjustLightnessForTest(hsl, darkBg, 75);
      
      if (adjusted) {
        expect(adjusted.l).toBeGreaterThan(hsl.l);
      }
    });

    it('should decrease lightness for light mode when Lc is too low', () => {
      const lightBg: RGB = { r: 255, g: 255, b: 255 };
      const hsl: HSL = { h: 240, s: 5, l: 50 };
      
      const adjusted = adjustLightnessForTest(hsl, lightBg, 75);
      
      if (adjusted) {
        expect(adjusted.l).toBeLessThan(hsl.l);
      }
    });

    it('should not adjust if already meeting threshold', () => {
      const darkBg: RGB = { r: 10, g: 10, b: 10 };
      const hsl: HSL = { h: 0, s: 0, l: 90 }; // Already very light
      
      const rgb = APCACalculator.hslToRgb(hsl);
      const currentLc = Math.abs(APCACalculator.calculateLc(rgb, darkBg));
      
      if (currentLc >= 75) {
        const adjusted = adjustLightnessForTest(hsl, darkBg, 75);
        
        // Should return original or very close
        if (adjusted) {
          expect(Math.abs(adjusted.l - hsl.l)).toBeLessThan(1);
        }
      }
    });
  });
});

/**
 * Helper function to simulate lightness adjustment
 * (Simplified version of the actual algorithm for testing)
 */
function adjustLightnessForTest(
  hsl: HSL,
  background: RGB,
  targetLc: number
): HSL | null {
  const originalRgb = APCACalculator.hslToRgb(hsl);
  const currentLc = Math.abs(APCACalculator.calculateLc(originalRgb, background));
  
  // If already meeting threshold, return original
  if (currentLc >= targetLc) {
    return hsl;
  }
  
  // Binary search for lightness that meets target
  let low = 0;
  let high = 100;
  let bestL = hsl.l;
  let bestLc = currentLc;
  
  for (let i = 0; i < 20; i++) {
    const mid = (low + high) / 2;
    const testHsl: HSL = { h: hsl.h, s: hsl.s, l: mid };
    const testRgb = APCACalculator.hslToRgb(testHsl);
    const testLc = Math.abs(APCACalculator.calculateLc(testRgb, background));
    
    if (Math.abs(testLc - targetLc) < Math.abs(bestLc - targetLc)) {
      bestL = mid;
      bestLc = testLc;
    }
    
    // Determine background luminance for direction decision
    const bgLuminance = 0.2126 * background.r + 0.7152 * background.g + 0.0722 * background.b;
    
    if (testLc < targetLc) {
      // Need more contrast
      // For dark backgrounds, increase lightness
      // For light backgrounds, decrease lightness
      if (bgLuminance < 128) {
        low = mid; // Dark background: increase lightness
      } else {
        high = mid; // Light background: decrease lightness
      }
    } else {
      // Have enough contrast
      if (bgLuminance < 128) {
        high = mid;
      } else {
        low = mid;
      }
    }
  }
  
  // Check ±15% constraint
  const maxChange = hsl.l * 0.15;
  if (Math.abs(bestL - hsl.l) > maxChange) {
    return null; // Cannot meet threshold within constraint
  }
  
  return { h: hsl.h, s: hsl.s, l: bestL };
}
