/**
 * APCA Parser and Printer Tests
 * 
 * Property-based and unit tests for APCA parser/printer module
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { APCAParser } from '../apca-parser';

describe('APCAParser', () => {
  describe('Property 4: Parser and Printer Round-Trip', () => {
    it('should preserve Lc values through parse/print cycle', () => {
      fc.assert(
        fc.property(
          // Generate random Lc values in valid range
          fc.double({ min: -108.3, max: 108.3 }),
          (lc: number) => {
            const printed = APCAParser.print(lc);
            const parsed = APCAParser.parse(printed);
            
            // Should be within 0.1 tolerance as specified
            expect(Math.abs(parsed - lc)).toBeLessThan(0.1);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Property 5: Parser Error Handling', () => {
    it('should throw error for invalid Lc strings', () => {
      fc.assert(
        fc.property(
          // Generate invalid strings
          fc.oneof(
            fc.string().filter(s => !s.match(/^Lc\s+-?\d+(\.\d+)?$/)), // Wrong format
            fc.constant('Lc 200'), // Out of range (positive)
            fc.constant('Lc -200'), // Out of range (negative)
            fc.constant('Lc abc'), // Non-numeric
            fc.constant('75'), // Missing "Lc" prefix
            fc.constant(''), // Empty string
          ),
          (invalidString: string) => {
            expect(() => APCAParser.parse(invalidString)).toThrow();
          }
        ),
        { numRuns: 50 }
      );
    });

    it('should include invalid input in error message', () => {
      const invalidInputs = [
        'Lc 200',
        'Lc -200',
        'Lc abc',
        '75',
        'invalid',
        'Lc',
      ];

      invalidInputs.forEach(input => {
        try {
          APCAParser.parse(input);
          // Should not reach here
          expect(true).toBe(false);
        } catch (error) {
          expect(error instanceof Error).toBe(true);
          expect((error as Error).message).toContain(input);
        }
      });
    });
  });

  describe('Unit Tests: Specific Examples', () => {
    describe('Parsing', () => {
      it('should parse "Lc 75.3" to 75.3', () => {
        expect(APCAParser.parse('Lc 75.3')).toBe(75.3);
      });

      it('should parse "Lc -60.2" to -60.2', () => {
        expect(APCAParser.parse('Lc -60.2')).toBe(-60.2);
      });

      it('should parse "Lc 0" to 0', () => {
        expect(APCAParser.parse('Lc 0')).toBe(0);
      });

      it('should parse "Lc 0.0" to 0', () => {
        expect(APCAParser.parse('Lc 0.0')).toBe(0);
      });

      it('should handle extra whitespace', () => {
        expect(APCAParser.parse('Lc  75.3')).toBe(75.3);
        expect(APCAParser.parse('Lc\t75.3')).toBe(75.3);
      });
    });

    describe('Printing', () => {
      it('should print 75.3 as "Lc 75.3"', () => {
        expect(APCAParser.print(75.3)).toBe('Lc 75.3');
      });

      it('should print -60.2 as "Lc -60.2"', () => {
        expect(APCAParser.print(-60.2)).toBe('Lc -60.2');
      });

      it('should print 0 as "Lc 0.0"', () => {
        expect(APCAParser.print(0)).toBe('Lc 0.0');
      });

      it('should format with one decimal place', () => {
        expect(APCAParser.print(75)).toBe('Lc 75.0');
        expect(APCAParser.print(75.12345)).toBe('Lc 75.1');
      });
    });

    describe('Edge Cases', () => {
      it('should handle maximum positive Lc', () => {
        const maxLc = 108.3;
        const printed = APCAParser.print(maxLc);
        const parsed = APCAParser.parse(printed);
        
        expect(parsed).toBeCloseTo(maxLc, 1);
      });

      it('should handle maximum negative Lc', () => {
        const minLc = -108.3;
        const printed = APCAParser.print(minLc);
        const parsed = APCAParser.parse(printed);
        
        expect(parsed).toBeCloseTo(minLc, 1);
      });

      it('should throw for Lc values out of range', () => {
        expect(() => APCAParser.print(109)).toThrow();
        expect(() => APCAParser.print(-109)).toThrow();
      });

      it('should throw for invalid parse input', () => {
        expect(() => APCAParser.parse('Lc 109')).toThrow();
        expect(() => APCAParser.parse('Lc -109')).toThrow();
        expect(() => APCAParser.parse('75')).toThrow();
        expect(() => APCAParser.parse('Lc')).toThrow();
        expect(() => APCAParser.parse('')).toThrow();
      });
    });

    describe('Validation', () => {
      it('should validate Lc range on print', () => {
        expect(() => APCAParser.print(200)).toThrow(/range/i);
        expect(() => APCAParser.print(-200)).toThrow(/range/i);
      });

      it('should validate Lc range on parse', () => {
        expect(() => APCAParser.parse('Lc 200')).toThrow(/range/i);
        expect(() => APCAParser.parse('Lc -200')).toThrow(/range/i);
      });

      it('should provide descriptive error messages', () => {
        try {
          APCAParser.parse('invalid');
        } catch (error) {
          expect(error instanceof Error).toBe(true);
          expect((error as Error).message).toMatch(/invalid|format/i);
        }

        try {
          APCAParser.print(200);
        } catch (error) {
          expect(error instanceof Error).toBe(true);
          expect((error as Error).message).toMatch(/range/i);
        }
      });
    });
  });
});
