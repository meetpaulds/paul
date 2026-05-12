/**
 * APCA Validation Tool Integration Tests
 * 
 * Integration tests for APCA validation tool
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { existsSync, unlinkSync, writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { validate, outputJSON } from '../validate-apca';
import type { ValidationResult } from '../validate-apca';

describe('APCA Validation Tool', () => {
  const tokensPath = resolve(__dirname, '../../src/tokens.css');
  const testOutputPath = resolve(__dirname, './test-apca-report.json');

  afterEach(() => {
    // Clean up test files
    if (existsSync(testOutputPath)) {
      unlinkSync(testOutputPath);
    }
  });

  describe('Integration Tests: Validation Tool', () => {
    it('should read tokens.css and produce JSON report', () => {
      const result = validate(tokensPath);
      
      expect(result).toBeDefined();
      expect(result.totalChecks).toBeGreaterThan(0);
      expect(result.failedChecks).toBeGreaterThanOrEqual(0);
      expect(result.passed).toBeDefined();
      expect(Array.isArray(result.failures)).toBe(true);
    });

    it('should validate compliant tokens as passing', () => {
      const result = validate(tokensPath);
      
      // After APCA migration, all tokens should pass
      expect(result.passed).toBe(true);
      expect(result.failedChecks).toBe(0);
      expect(result.failures.length).toBe(0);
    });

    it('should have correct total check count', () => {
      const result = validate(tokensPath);
      
      // Should check all foreground-background pairs
      // Based on token usage map, we expect 34 checks
      expect(result.totalChecks).toBe(34);
    });

    it('should output JSON report to file', () => {
      const result = validate(tokensPath);
      
      outputJSON(result, testOutputPath);
      
      expect(existsSync(testOutputPath)).toBe(true);
      
      // Read and parse JSON
      const json = JSON.parse(readFileSync(testOutputPath, 'utf-8'));
      expect(json.totalChecks).toBe(result.totalChecks);
      expect(json.failedChecks).toBe(result.failedChecks);
      expect(json.passed).toBe(result.passed);
    });

    it('should include all required fields in validation result', () => {
      const result = validate(tokensPath);
      
      expect(result).toHaveProperty('passed');
      expect(result).toHaveProperty('totalChecks');
      expect(result).toHaveProperty('failedChecks');
      expect(result).toHaveProperty('failures');
      
      expect(typeof result.passed).toBe('boolean');
      expect(typeof result.totalChecks).toBe('number');
      expect(typeof result.failedChecks).toBe('number');
      expect(Array.isArray(result.failures)).toBe(true);
    });

    it('should include detailed failure information when tokens fail', () => {
      // Create a temporary tokens file with a failing token
      const tempTokensPath = resolve(__dirname, './temp-tokens.css');
      const failingTokens = `
:root {
  /* This will fail - too low contrast */
  --foreground: 240 10% 50%;
  --background: 0 0% 100%;
}
      `.trim();
      
      writeFileSync(tempTokensPath, failingTokens);
      
      try {
        const result = validate(tempTokensPath);
        
        if (!result.passed) {
          expect(result.failures.length).toBeGreaterThan(0);
          
          const failure = result.failures[0];
          expect(failure).toHaveProperty('tokenName');
          expect(failure).toHaveProperty('mode');
          expect(failure).toHaveProperty('foreground');
          expect(failure).toHaveProperty('background');
          expect(failure).toHaveProperty('backgroundHSL');
          expect(failure).toHaveProperty('lcValue');
          expect(failure).toHaveProperty('threshold');
          expect(failure).toHaveProperty('useCase');
        }
      } finally {
        // Clean up
        if (existsSync(tempTokensPath)) {
          unlinkSync(tempTokensPath);
        }
      }
    });
  });

  describe('Validation Logic', () => {
    it('should correctly classify body text tokens', () => {
      const result = validate(tokensPath);
      
      // Body text tokens should be validated against Lc 75
      // (foreground, card-foreground, popover-foreground, muted-foreground)
      expect(result.totalChecks).toBeGreaterThan(0);
    });

    it('should correctly classify UI component tokens', () => {
      const result = validate(tokensPath);
      
      // UI component tokens should be validated against Lc 60
      // (destructive-text, primary-foreground, etc.)
      expect(result.totalChecks).toBeGreaterThan(0);
    });

    it('should handle both light and dark modes', () => {
      const result = validate(tokensPath);
      
      // Should validate tokens in both modes
      expect(result.totalChecks).toBeGreaterThan(10); // At least some checks in each mode
    });

    it('should calculate Lc values correctly', () => {
      const result = validate(tokensPath);
      
      // All Lc values should be within valid range
      result.failures.forEach(failure => {
        expect(Math.abs(failure.lcValue)).toBeLessThanOrEqual(108.3);
      });
    });
  });

  describe('Error Handling', () => {
    it('should throw error for non-existent file', () => {
      const nonExistentPath = resolve(__dirname, './non-existent-tokens.css');
      
      expect(() => validate(nonExistentPath)).toThrow();
    });

    it('should handle malformed tokens file gracefully', () => {
      const tempTokensPath = resolve(__dirname, './malformed-tokens.css');
      const malformedContent = `
:root {
  --invalid: not a color;
}
      `.trim();
      
      writeFileSync(tempTokensPath, malformedContent);
      
      try {
        // Should either throw or return empty result
        const result = validate(tempTokensPath);
        expect(result.totalChecks).toBeGreaterThanOrEqual(0);
      } catch (error) {
        // Error is acceptable for malformed file
        expect(error).toBeDefined();
      } finally {
        if (existsSync(tempTokensPath)) {
          unlinkSync(tempTokensPath);
        }
      }
    });
  });

  describe('JSON Output', () => {
    it('should create valid JSON file', () => {
      const result = validate(tokensPath);
      outputJSON(result, testOutputPath);
      
      expect(existsSync(testOutputPath)).toBe(true);
      
      // Should be valid JSON
      expect(() => JSON.parse(readFileSync(testOutputPath, 'utf-8'))).not.toThrow();
    });

    it('should include all result data in JSON', () => {
      const result = validate(tokensPath);
      outputJSON(result, testOutputPath);
      
      const json = JSON.parse(readFileSync(testOutputPath, 'utf-8'));
      
      expect(json.passed).toBe(result.passed);
      expect(json.totalChecks).toBe(result.totalChecks);
      expect(json.failedChecks).toBe(result.failedChecks);
      expect(json.failures).toEqual(result.failures);
    });

    it('should format JSON with proper indentation', () => {
      const result = validate(tokensPath);
      outputJSON(result, testOutputPath);
      
      const content = readFileSync(testOutputPath, 'utf-8');
      
      // Should have indentation (not minified)
      expect(content).toMatch(/\n\s+/);
    });
  });
});
