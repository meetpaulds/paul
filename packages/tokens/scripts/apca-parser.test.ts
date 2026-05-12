/**
 * Tests for APCA Parser and Printer
 * 
 * These tests verify the parse() and print() functions work correctly
 * for valid inputs and handle errors appropriately for invalid inputs.
 */

import { describe, it, expect } from 'vitest';
import { parse, print } from './apca-parser';

describe('APCA Parser', () => {
  describe('parse() - valid inputs', () => {
    it('should parse positive Lc values', () => {
      expect(parse('Lc 75.3')).toBe(75.3);
      expect(parse('Lc 60.2')).toBe(60.2);
      expect(parse('Lc 108.3')).toBe(108.3);
    });

    it('should parse negative Lc values', () => {
      expect(parse('Lc -75.3')).toBe(-75.3);
      expect(parse('Lc -60.2')).toBe(-60.2);
      expect(parse('Lc -108.3')).toBe(-108.3);
    });

    it('should parse zero', () => {
      expect(parse('Lc 0')).toBe(0);
      expect(parse('Lc 0.0')).toBe(0);
    });

    it('should parse integers without decimal places', () => {
      expect(parse('Lc 75')).toBe(75);
      expect(parse('Lc -60')).toBe(-60);
    });

    it('should handle multiple spaces between Lc and value', () => {
      expect(parse('Lc  75.3')).toBe(75.3);
      expect(parse('Lc   -60.2')).toBe(-60.2);
    });
  });

  describe('parse() - invalid inputs', () => {
    it('should throw error for invalid format', () => {
      expect(() => parse('75.3')).toThrow('Invalid Lc string');
      expect(() => parse('Lc75.3')).toThrow('Invalid Lc string');
      expect(() => parse('lc 75.3')).toThrow('Invalid Lc string');
      expect(() => parse('LC 75.3')).toThrow('Invalid Lc string');
      expect(() => parse('invalid')).toThrow('Invalid Lc string');
    });

    it('should throw error for out of range values', () => {
      expect(() => parse('Lc 150')).toThrow('Lc value out of range');
      expect(() => parse('Lc -150')).toThrow('Lc value out of range');
      expect(() => parse('Lc 108.4')).toThrow('Lc value out of range');
      expect(() => parse('Lc -108.4')).toThrow('Lc value out of range');
    });

    it('should include invalid input in error message', () => {
      expect(() => parse('invalid')).toThrow('invalid');
      expect(() => parse('75.3')).toThrow('75.3');
    });
  });
});

describe('APCA Printer', () => {
  describe('print() - valid inputs', () => {
    it('should format positive Lc values', () => {
      expect(print(75.3)).toBe('Lc 75.3');
      expect(print(60.2)).toBe('Lc 60.2');
      expect(print(108.3)).toBe('Lc 108.3');
    });

    it('should format negative Lc values', () => {
      expect(print(-75.3)).toBe('Lc -75.3');
      expect(print(-60.2)).toBe('Lc -60.2');
      expect(print(-108.3)).toBe('Lc -108.3');
    });

    it('should format zero with one decimal place', () => {
      expect(print(0)).toBe('Lc 0.0');
    });

    it('should format integers with one decimal place', () => {
      expect(print(75)).toBe('Lc 75.0');
      expect(print(-60)).toBe('Lc -60.0');
    });

    it('should round to one decimal place', () => {
      expect(print(75.34)).toBe('Lc 75.3');
      expect(print(75.36)).toBe('Lc 75.4');
      expect(print(-60.24)).toBe('Lc -60.2');
      expect(print(-60.26)).toBe('Lc -60.3');
    });
  });

  describe('print() - invalid inputs', () => {
    it('should throw error for out of range values', () => {
      expect(() => print(150)).toThrow('Lc value out of range');
      expect(() => print(-150)).toThrow('Lc value out of range');
      expect(() => print(108.4)).toThrow('Lc value out of range');
      expect(() => print(-108.4)).toThrow('Lc value out of range');
    });
  });
});

describe('APCA Parser and Printer - Round-trip', () => {
  it('should preserve value through parse-print-parse cycle', () => {
    const testValues = [75.3, -60.2, 0, 108.3, -108.3, 45.7, -90.1];
    
    testValues.forEach(value => {
      const printed = print(value);
      const parsed = parse(printed);
      expect(Math.abs(parsed - value)).toBeLessThan(0.1);
    });
  });

  it('should preserve value through print-parse-print cycle', () => {
    const testStrings = ['Lc 75.3', 'Lc -60.2', 'Lc 0', 'Lc 108.3', 'Lc -108.3'];
    
    testStrings.forEach(str => {
      const parsed = parse(str);
      const printed = print(parsed);
      const reparsed = parse(printed);
      expect(Math.abs(reparsed - parsed)).toBeLessThan(0.1);
    });
  });
});
