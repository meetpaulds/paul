#!/usr/bin/env node
/**
 * APCA Validation Tool
 * 
 * Validates all color tokens in tokens.css against APCA thresholds.
 * Reads tokens.css, calculates Lc for all foreground-background pairs,
 * and reports failures with token name, mode, Lc value, threshold, and use case.
 * 
 * Usage:
 *   pnpm run validate:apca
 *   pnpm run validate:apca --json=./apca-report.json
 * 
 * Exit codes:
 *   0 - All checks passed
 *   1 - One or more checks failed
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { APCACalculator, type UseCase } from './apca-calculator';
import {
  parseTokensFile,
  getForegroundTokens,
  getBackgroundsForForeground,
  type ParsedToken,
} from './token-usage-map';

/**
 * Validation failure details
 */
export interface ValidationFailure {
  tokenName: string;
  mode: 'light' | 'dark';
  foreground: { h: number; s: number; l: number };
  background: string;
  backgroundHSL: { h: number; s: number; l: number };
  lcValue: number;
  threshold: number;
  useCase: UseCase;
}

/**
 * Validation result
 */
export interface ValidationResult {
  passed: boolean;
  totalChecks: number;
  failedChecks: number;
  failures: ValidationFailure[];
}

/**
 * APCAValidator interface
 */
export interface APCAValidator {
  validate(tokensPath: string): ValidationResult;
  outputJSON(result: ValidationResult, outputPath: string): void;
}

/**
 * Determine use case for a foreground token
 * 
 * @param tokenName - Name of the foreground token (without -- prefix)
 * @returns UseCase ('body-text', 'large-text', or 'ui-component')
 */
function determineUseCase(tokenName: string): UseCase {
  // Body text tokens require Lc 75 (AAA equivalent)
  const bodyTextTokens = [
    'foreground',
    'card-foreground',
    'popover-foreground',
    'destructive-text',
  ];
  
  if (bodyTextTokens.includes(tokenName)) {
    return 'body-text';
  }
  
  // All other foreground tokens are large text or UI components (Lc 60, AA equivalent)
  return 'large-text';
}

/**
 * Validate all tokens in tokens.css against APCA thresholds
 * 
 * @param tokensPath - Path to tokens.css file
 * @returns ValidationResult with pass/fail status and failure details
 */
export function validate(tokensPath: string): ValidationResult {
  const allTokens = parseTokensFile(tokensPath);
  const foregroundTokens = getForegroundTokens(allTokens);
  
  const failures: ValidationFailure[] = [];
  let totalChecks = 0;
  
  // Validate each foreground token against its backgrounds
  for (const foreground of foregroundTokens) {
    const useCase = determineUseCase(foreground.name);
    const backgrounds = getBackgroundsForForeground(
      foreground.name,
      allTokens,
      foreground.mode
    );
    
    for (const background of backgrounds) {
      totalChecks++;
      
      // Convert HSL to RGB for APCA calculation
      const fgRGB = APCACalculator.hslToRgb(foreground.hsl);
      const bgRGB = APCACalculator.hslToRgb(background.hsl);
      
      // Calculate APCA Lc value
      const lcValue = APCACalculator.calculateLc(fgRGB, bgRGB);
      
      // Check if Lc meets threshold for use case
      const meetsThreshold = APCACalculator.meetsThreshold(lcValue, useCase);
      
      if (!meetsThreshold) {
        // Get threshold value for reporting
        const thresholds: Record<UseCase, number> = {
          'body-text': 75,
          'large-text': 60,
          'ui-component': 60,
        };
        
        failures.push({
          tokenName: foreground.name,
          mode: foreground.mode,
          foreground: foreground.hsl,
          background: background.name,
          backgroundHSL: background.hsl,
          lcValue,
          threshold: thresholds[useCase],
          useCase,
        });
      }
    }
  }
  
  return {
    passed: failures.length === 0,
    totalChecks,
    failedChecks: failures.length,
    failures,
  };
}

/**
 * Output validation results in JSON format
 * 
 * @param result - ValidationResult object
 * @param outputPath - Path to write JSON report
 */
export function outputJSON(result: ValidationResult, outputPath: string): void {
  const json = JSON.stringify(result, null, 2);
  writeFileSync(outputPath, json, 'utf-8');
  console.log(`\nValidation report written to: ${outputPath}`);
}

/**
 * Format validation result for console output
 * 
 * @param result - ValidationResult object
 * @returns Formatted string for console
 */
function formatConsoleOutput(result: ValidationResult): string {
  const lines: string[] = [];
  
  lines.push('\n=== APCA Validation Report ===\n');
  lines.push(`Total checks: ${result.totalChecks}`);
  lines.push(`Failed checks: ${result.failedChecks}`);
  lines.push(`Status: ${result.passed ? '✓ PASSED' : '✗ FAILED'}\n`);
  
  if (result.failures.length > 0) {
    lines.push('Failures:\n');
    
    for (const failure of result.failures) {
      lines.push(`  • ${failure.tokenName} (${failure.mode} mode)`);
      lines.push(`    Background: ${failure.background}`);
      lines.push(`    Lc value: ${failure.lcValue.toFixed(1)}`);
      lines.push(`    Threshold: ${failure.threshold} (${failure.useCase})`);
      lines.push(`    Foreground HSL: ${failure.foreground.h} ${failure.foreground.s}% ${failure.foreground.l}%`);
      lines.push(`    Background HSL: ${failure.backgroundHSL.h} ${failure.backgroundHSL.s}% ${failure.backgroundHSL.l}%`);
      lines.push('');
    }
  }
  
  return lines.join('\n');
}

/**
 * Main CLI entry point
 */
function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const jsonOutputArg = args.find(arg => arg.startsWith('--json='));
  const jsonOutputPath = jsonOutputArg ? jsonOutputArg.split('=')[1] : null;
  
  // Resolve tokens.css path
  const tokensPath = resolve(__dirname, '../src/tokens.css');
  
  try {
    // Run validation
    console.log('Validating APCA compliance...');
    console.log(`Reading tokens from: ${tokensPath}\n`);
    
    const result = validate(tokensPath);
    
    // Output to console
    console.log(formatConsoleOutput(result));
    
    // Output to JSON if requested
    if (jsonOutputPath) {
      outputJSON(result, resolve(process.cwd(), jsonOutputPath));
    }
    
    // Exit with appropriate code
    process.exit(result.passed ? 0 : 1);
  } catch (error) {
    console.error('\n✗ Validation failed with error:');
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Export for testing
export const APCAValidatorImpl: APCAValidator = {
  validate,
  outputJSON,
};

// Run CLI if executed directly
if (require.main === module) {
  main();
}
