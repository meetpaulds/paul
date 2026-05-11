import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { writeFileSync, unlinkSync, existsSync } from 'fs';
import { resolve } from 'path';
import { validate, outputJSON, type ValidationResult } from './validate-apca';

describe('APCA Validation Tool', () => {
  const testTokensPath = resolve(__dirname, './test-tokens.css');
  const testOutputPath = resolve(__dirname, './test-output.json');

  // Clean up test files after each test
  afterEach(() => {
    if (existsSync(testTokensPath)) {
      unlinkSync(testTokensPath);
    }
    if (existsSync(testOutputPath)) {
      unlinkSync(testOutputPath);
    }
  });

  describe('validate()', () => {
    it('should pass validation for compliant tokens', () => {
      // Create test tokens.css with compliant colors
      const compliantTokens = `
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
}
`;
      writeFileSync(testTokensPath, compliantTokens, 'utf-8');

      const result = validate(testTokensPath);

      expect(result.passed).toBe(true);
      expect(result.failedChecks).toBe(0);
      expect(result.failures).toHaveLength(0);
      expect(result.totalChecks).toBeGreaterThan(0);
    });

    it('should fail validation for non-compliant tokens', () => {
      // Create test tokens.css with non-compliant colors (low contrast)
      const nonCompliantTokens = `
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 80%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 240 10% 20%;
}
`;
      writeFileSync(testTokensPath, nonCompliantTokens, 'utf-8');

      const result = validate(testTokensPath);

      expect(result.passed).toBe(false);
      expect(result.failedChecks).toBeGreaterThan(0);
      expect(result.failures.length).toBeGreaterThan(0);
    });

    it('should report correct failure details', () => {
      // Create test tokens.css with known non-compliant color
      const nonCompliantTokens = `
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 80%;
}
`;
      writeFileSync(testTokensPath, nonCompliantTokens, 'utf-8');

      const result = validate(testTokensPath);

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
      
      expect(failure.tokenName).toBe('foreground');
      expect(failure.mode).toBe('light');
      expect(failure.background).toBe('background');
      expect(typeof failure.lcValue).toBe('number');
      expect(typeof failure.threshold).toBe('number');
    });

    it('should validate body text tokens with Lc 75 threshold', () => {
      // Create test tokens.css with body text token
      const bodyTextTokens = `
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 50%;
}
`;
      writeFileSync(testTokensPath, bodyTextTokens, 'utf-8');

      const result = validate(testTokensPath);

      // foreground is a body-text token, should require Lc 75
      const failure = result.failures.find(f => f.tokenName === 'foreground');
      expect(failure).toBeDefined();
      expect(failure?.useCase).toBe('body-text');
      expect(failure?.threshold).toBe(75);
    });

    it('should validate large text tokens with Lc 60 threshold', () => {
      // Create test tokens.css with large text token
      const largeTextTokens = `
:root {
  --background: 0 0% 100%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 60%;
}
`;
      writeFileSync(testTokensPath, largeTextTokens, 'utf-8');

      const result = validate(testTokensPath);

      // primary-foreground is a large-text token, should require Lc 60
      const failure = result.failures.find(f => f.tokenName === 'primary-foreground');
      if (failure) {
        expect(failure.useCase).toBe('large-text');
        expect(failure.threshold).toBe(60);
      }
    });

    it('should validate both light and dark modes', () => {
      // Create test tokens.css with both modes
      const bothModesTokens = `
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 80%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 240 10% 20%;
}
`;
      writeFileSync(testTokensPath, bothModesTokens, 'utf-8');

      const result = validate(testTokensPath);

      // Should have failures in both modes
      const lightModeFailures = result.failures.filter(f => f.mode === 'light');
      const darkModeFailures = result.failures.filter(f => f.mode === 'dark');
      
      expect(lightModeFailures.length).toBeGreaterThan(0);
      expect(darkModeFailures.length).toBeGreaterThan(0);
    });
  });

  describe('outputJSON()', () => {
    it('should write JSON report to file', () => {
      const mockResult: ValidationResult = {
        passed: false,
        totalChecks: 10,
        failedChecks: 2,
        failures: [
          {
            tokenName: 'test-token',
            mode: 'light',
            foreground: { h: 0, s: 0, l: 50 },
            background: 'background',
            backgroundHSL: { h: 0, s: 0, l: 100 },
            lcValue: 50.5,
            threshold: 75,
            useCase: 'body-text',
          },
        ],
      };

      outputJSON(mockResult, testOutputPath);

      expect(existsSync(testOutputPath)).toBe(true);
      
      const fileContent = require('fs').readFileSync(testOutputPath, 'utf-8');
      const parsedResult = JSON.parse(fileContent);
      
      expect(parsedResult).toEqual(mockResult);
    });

    it('should format JSON with proper indentation', () => {
      const mockResult: ValidationResult = {
        passed: true,
        totalChecks: 5,
        failedChecks: 0,
        failures: [],
      };

      outputJSON(mockResult, testOutputPath);

      const fileContent = require('fs').readFileSync(testOutputPath, 'utf-8');
      
      // Check that JSON is formatted with indentation (not minified)
      expect(fileContent).toContain('\n');
      expect(fileContent).toContain('  ');
    });
  });

  describe('Integration with real tokens.css', () => {
    it('should validate actual tokens.css file', () => {
      const actualTokensPath = resolve(__dirname, '../src/tokens.css');
      
      // This test verifies the tool can read and process the actual tokens.css
      const result = validate(actualTokensPath);

      expect(result).toHaveProperty('passed');
      expect(result).toHaveProperty('totalChecks');
      expect(result).toHaveProperty('failedChecks');
      expect(result).toHaveProperty('failures');
      expect(result.totalChecks).toBeGreaterThan(0);
      expect(Array.isArray(result.failures)).toBe(true);
    });
  });
});
