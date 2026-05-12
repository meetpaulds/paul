/**
 * CI Integration Tests
 * 
 * Integration tests for CI validation workflow
 */

import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import { resolve } from 'path';
import { existsSync, readFileSync, unlinkSync } from 'fs';

describe('CI Integration', () => {
  const tokensDir = resolve(__dirname, '../..');

  describe('Validation Script', () => {
    it('should have validate:apca script in package.json', () => {
      const packageJson = JSON.parse(readFileSync(resolve(tokensDir, 'package.json'), 'utf-8'));
      
      expect(packageJson.scripts).toHaveProperty('validate:apca');
      expect(packageJson.scripts['validate:apca']).toContain('validate-apca');
    });

    it('should have validate:apca:json script in package.json', () => {
      const packageJson = JSON.parse(readFileSync(resolve(tokensDir, 'package.json'), 'utf-8'));
      
      expect(packageJson.scripts).toHaveProperty('validate:apca:json');
      expect(packageJson.scripts['validate:apca:json']).toContain('--json');
    });

    it('should exit with code 0 when validation passes', () => {
      try {
        execSync('pnpm run validate:apca', {
          cwd: tokensDir,
          stdio: 'pipe',
        });
        
        // If we reach here, exit code was 0
        expect(true).toBe(true);
      } catch (error: any) {
        // If validation fails, this test should fail
        expect(error.status).toBe(0);
      }
    });

    it('should generate JSON report when requested', () => {
      const reportPath = resolve(tokensDir, 'test-ci-report.json');
      
      try {
        execSync(`pnpm run validate:apca:json`, {
          cwd: tokensDir,
          stdio: 'pipe',
        });
      } catch (_error) {
        // Even if validation fails, continue to check report
      }
      
      // The default validate:apca:json script writes to apca-report.json
      const defaultReportPath = resolve(tokensDir, 'apca-report.json');
      expect(existsSync(defaultReportPath)).toBe(true);
      
      // Clean up
      if (existsSync(defaultReportPath)) {
        unlinkSync(defaultReportPath);
      }
      if (existsSync(reportPath)) {
        unlinkSync(reportPath);
      }
    });
  });

  describe('CI Workflow', () => {
    it('should have CI workflow file', () => {
      const ciWorkflowPath = resolve(tokensDir, '../../.github/workflows/ci.yml');
      
      expect(existsSync(ciWorkflowPath)).toBe(true);
    });

    it('should include APCA validation in CI workflow', () => {
      const ciWorkflowPath = resolve(tokensDir, '../../.github/workflows/ci.yml');
      
      if (existsSync(ciWorkflowPath)) {
        const content = readFileSync(ciWorkflowPath, 'utf-8');
        
        expect(content).toMatch(/validate:apca|validate-apca/);
      }
    });
  });

  describe('Dependencies', () => {
    it('should have apca-w3 installed', () => {
      const packageJson = JSON.parse(readFileSync(resolve(tokensDir, 'package.json'), 'utf-8'));
      
      expect(packageJson.devDependencies).toHaveProperty('apca-w3');
    });

    it('should have tsx for running TypeScript scripts', () => {
      const packageJson = JSON.parse(readFileSync(resolve(tokensDir, 'package.json'), 'utf-8'));
      
      expect(packageJson.devDependencies).toHaveProperty('tsx');
    });

    it('should have vitest for testing', () => {
      const packageJson = JSON.parse(readFileSync(resolve(tokensDir, 'package.json'), 'utf-8'));
      
      expect(packageJson.devDependencies).toHaveProperty('vitest');
    });

    it('should have fast-check for property-based testing', () => {
      const packageJson = JSON.parse(readFileSync(resolve(tokensDir, 'package.json'), 'utf-8'));
      
      expect(packageJson.devDependencies).toHaveProperty('fast-check');
    });
  });

  describe('Script Files', () => {
    it('should have apca-calculator.ts', () => {
      const calculatorPath = resolve(tokensDir, 'scripts/apca-calculator.ts');
      expect(existsSync(calculatorPath)).toBe(true);
    });

    it('should have apca-parser.ts', () => {
      const parserPath = resolve(tokensDir, 'scripts/apca-parser.ts');
      expect(existsSync(parserPath)).toBe(true);
    });

    it('should have token-usage-map.ts', () => {
      const usageMapPath = resolve(tokensDir, 'scripts/token-usage-map.ts');
      expect(existsSync(usageMapPath)).toBe(true);
    });

    it('should have recalculate-tokens.ts', () => {
      const recalculatePath = resolve(tokensDir, 'scripts/recalculate-tokens.ts');
      expect(existsSync(recalculatePath)).toBe(true);
    });

    it('should have validate-apca.ts', () => {
      const validatePath = resolve(tokensDir, 'scripts/validate-apca.ts');
      expect(existsSync(validatePath)).toBe(true);
    });
  });

  describe('Token Files', () => {
    it('should have tokens.css', () => {
      const tokensPath = resolve(tokensDir, 'src/tokens.css');
      expect(existsSync(tokensPath)).toBe(true);
    });

    it('should have tokens.ts', () => {
      const tokensPath = resolve(tokensDir, 'src/tokens.ts');
      expect(existsSync(tokensPath)).toBe(true);
    });

    it('should have inline Lc comments in tokens.css', () => {
      const tokensPath = resolve(tokensDir, 'src/tokens.css');
      const content = readFileSync(tokensPath, 'utf-8');
      
      expect(content).toMatch(/\/\*\s*Lc\s+-?\d+\.\d+/);
    });
  });
});
