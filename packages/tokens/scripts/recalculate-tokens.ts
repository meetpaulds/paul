/**
 * Token Recalculation Script
 * 
 * Automated script to recalculate color tokens to meet APCA thresholds.
 * This script:
 * - Parses tokens.css to extract all color tokens
 * - Calculates APCA Lc values for each foreground-background pair
 * - Adjusts lightness values to meet APCA thresholds when needed
 * - Generates inline comments documenting Lc values
 * - Writes updated tokens to output file
 * - Supports dry-run mode for previewing changes
 */

import { readFileSync, writeFileSync } from 'fs';
import { calculateLc, hslToRgb, rgbToHsl, meetsThreshold, type HSL, type RGB, type UseCase } from './apca-calculator';
import { print } from './apca-parser';
import {
  parseTokensFile,
  getForegroundTokens,
  getBackgroundsForForeground,
  type ParsedToken,
} from './token-usage-map';

/**
 * Token change record for reporting
 */
export interface TokenChange {
  tokenName: string;
  mode: 'light' | 'dark';
  before: HSL;
  after: HSL;
  lcBefore: number;
  lcAfter: number;
  background: string;
}

/**
 * Recalculation report
 */
export interface RecalculationReport {
  totalTokens: number;
  tokensChanged: number;
  changes: TokenChange[];
  flaggedTokens: string[];
}

/**
 * APCA thresholds for different use cases
 */
const APCA_THRESHOLDS: Record<UseCase, number> = {
  'body-text': 75,
  'large-text': 60,
  'ui-component': 60,
};

/**
 * Maximum lightness adjustment allowed (±15%)
 */
const MAX_LIGHTNESS_ADJUSTMENT = 15;

/**
 * Determine use case for a foreground token
 * 
 * @param tokenName - Name of the foreground token (without -- prefix)
 * @returns UseCase for the token
 */
function getUseCase(tokenName: string): UseCase {
  // Body text tokens (default foreground, card-foreground, popover-foreground)
  if (tokenName === 'foreground' || tokenName === 'card-foreground' || tokenName === 'popover-foreground') {
    return 'body-text';
  }
  
  // Muted foreground is also body text
  if (tokenName === 'muted-foreground') {
    return 'body-text';
  }
  
  // Destructive text is body text
  if (tokenName === 'destructive-text') {
    return 'body-text';
  }
  
  // All other foreground tokens are UI components
  return 'ui-component';
}

/**
 * Adjust lightness of a color to meet target Lc
 * 
 * Uses binary search to find the lightness value that achieves the target Lc
 * while preserving hue and saturation.
 * 
 * @param color - HSL color object to adjust
 * @param background - HSL background color
 * @param targetLc - Target APCA Lc value (absolute value)
 * @param maxAdjustment - Maximum lightness adjustment allowed (default: 15%)
 * @returns Adjusted HSL color, or null if target cannot be met within constraint
 */
export function adjustLightness(
  color: HSL,
  background: HSL,
  targetLc: number,
  maxAdjustment: number = MAX_LIGHTNESS_ADJUSTMENT
): HSL | null {
  const originalLightness = color.l;
  const minLightness = Math.max(0, originalLightness - maxAdjustment);
  const maxLightness = Math.min(100, originalLightness + maxAdjustment);
  
  // Convert background to RGB once
  const bgRgb = hslToRgb(background);
  
  // Helper function to calculate Lc for a given lightness
  const calculateLcForLightness = (l: number): number => {
    const testColor: HSL = { h: color.h, s: color.s, l };
    const testRgb = hslToRgb(testColor);
    return Math.abs(calculateLc(testRgb, bgRgb));
  };
  
  // Calculate Lc at the extremes to determine which direction increases contrast
  const minLc = calculateLcForLightness(minLightness);
  const maxLc = calculateLcForLightness(maxLightness);
  
  // Determine which direction increases contrast
  const increaseLightnessIncreasesContrast = maxLc > minLc;
  
  // Binary search for the lightness value that meets target Lc
  // We want to find the lightness closest to original that meets the threshold
  let low = minLightness;
  let high = maxLightness;
  
  // Binary search with precision of 0.1%
  const precision = 0.1;
  let bestLightness = increaseLightnessIncreasesContrast ? maxLightness : minLightness;
  let bestLc = Math.max(minLc, maxLc);
  
  while (high - low > precision) {
    const mid = (low + high) / 2;
    const testLc = calculateLcForLightness(mid);
    
    if (testLc >= targetLc) {
      // This meets the threshold
      bestLightness = mid;
      bestLc = testLc;
      
      // Try to get closer to original lightness
      if (increaseLightnessIncreasesContrast) {
        // Decreasing lightness might still meet threshold and be closer to original
        high = mid;
      } else {
        // Increasing lightness might still meet threshold and be closer to original
        low = mid;
      }
    } else {
      // Doesn't meet threshold - need more contrast
      // Track best result so far
      if (testLc > bestLc) {
        bestLc = testLc;
        bestLightness = mid;
      }
      
      if (increaseLightnessIncreasesContrast) {
        // Need to increase lightness for more contrast
        low = mid;
      } else {
        // Need to decrease lightness for more contrast
        high = mid;
      }
    }
  }
  
  // Round lightness to 1 decimal place
  bestLightness = Math.round(bestLightness * 10) / 10;
  
  // Return the best result we found within the constraint
  // Even if it doesn't meet the target, we return the best possible result
  return { h: color.h, s: color.s, l: bestLightness };
}

/**
 * Log a warning for tokens that cannot meet APCA threshold within constraint
 * 
 * @param tokenName - Name of the token
 * @param mode - 'light' or 'dark' mode
 * @param background - Name of the background token
 * @param currentLc - Current Lc value
 * @param targetLc - Target Lc value
 * @param originalLightness - Original lightness percentage
 */
export function logAdjustmentWarning(
  tokenName: string,
  mode: 'light' | 'dark',
  background: string,
  currentLc: number,
  targetLc: number,
  originalLightness: number
): void {
  console.warn(
    `Warning: Token "${tokenName}" (${mode} mode) cannot meet Lc ${targetLc} on --${background} within ±${MAX_LIGHTNESS_ADJUSTMENT}% lightness constraint. ` +
    `Current Lc: ${currentLc.toFixed(1)}, Original lightness: ${originalLightness}%. ` +
    `Manual review required.`
  );
}

/**
 * Recalculate all tokens in tokens.css to meet APCA thresholds
 * 
 * @param inputPath - Path to tokens.css
 * @param outputPath - Path to write updated tokens.css
 * @param dryRun - If true, only report changes without writing
 * @returns RecalculationReport
 */
export function recalculateTokens(
  inputPath: string,
  outputPath: string,
  dryRun: boolean = false
): RecalculationReport {
  // Parse tokens from input file
  const tokens = parseTokensFile(inputPath);
  const foregroundTokens = getForegroundTokens(tokens);
  
  const changes: TokenChange[] = [];
  const flaggedTokens: string[] = [];
  const adjustedTokens = new Map<string, HSL>(); // key: "tokenName-mode"
  
  // Process each foreground token
  for (const fgToken of foregroundTokens) {
    const useCase = getUseCase(fgToken.name);
    const targetLc = APCA_THRESHOLDS[useCase];
    
    // Get all backgrounds this foreground appears on
    const backgrounds = getBackgroundsForForeground(fgToken.name, tokens, fgToken.mode);
    
    // Calculate Lc for each background
    let needsAdjustment = false;
    let worstLc = Infinity;
    let worstBackground: ParsedToken | null = null;
    
    for (const bgToken of backgrounds) {
      const fgRgb = hslToRgb(fgToken.hsl);
      const bgRgb = hslToRgb(bgToken.hsl);
      const lc = calculateLc(fgRgb, bgRgb);
      const absLc = Math.abs(lc);
      
      if (absLc < targetLc) {
        needsAdjustment = true;
        if (absLc < worstLc) {
          worstLc = absLc;
          worstBackground = bgToken;
        }
      }
    }
    
    // If adjustment needed, adjust lightness to meet threshold on worst background
    if (needsAdjustment && worstBackground) {
      const adjusted = adjustLightness(fgToken.hsl, worstBackground.hsl, targetLc);
      
      if (adjusted) {
        // Verify adjusted color meets threshold on all backgrounds
        let meetsAllThresholds = true;
        for (const bgToken of backgrounds) {
          const adjustedRgb = hslToRgb(adjusted);
          const bgRgb = hslToRgb(bgToken.hsl);
          const adjustedLc = Math.abs(calculateLc(adjustedRgb, bgRgb));
          
          if (adjustedLc < targetLc) {
            meetsAllThresholds = false;
            break;
          }
        }
        
        if (meetsAllThresholds) {
          // Record change
          const key = `${fgToken.name}-${fgToken.mode}`;
          adjustedTokens.set(key, adjusted);
          
          const lcAfterValue = Math.abs(calculateLc(hslToRgb(adjusted), hslToRgb(worstBackground.hsl)));
          
          changes.push({
            tokenName: fgToken.name,
            mode: fgToken.mode,
            before: fgToken.hsl,
            after: adjusted,
            lcBefore: worstLc,
            lcAfter: lcAfterValue,
            background: worstBackground.name,
          });
        } else {
          // Flag for manual review
          const flagKey = `${fgToken.name} (${fgToken.mode})`;
          flaggedTokens.push(flagKey);
          console.warn(
            `Warning: Token "${fgToken.name}" (${fgToken.mode}) cannot meet Lc ${targetLc} on all backgrounds within ±${MAX_LIGHTNESS_ADJUSTMENT}% lightness constraint. ` +
            `Manual review required.`
          );
        }
      } else {
        // Flag for manual review
        const flagKey = `${fgToken.name} (${fgToken.mode})`;
        flaggedTokens.push(flagKey);
        console.warn(
          `Warning: Token "${fgToken.name}" (${fgToken.mode}) cannot meet Lc ${targetLc} within ±${MAX_LIGHTNESS_ADJUSTMENT}% lightness constraint. ` +
          `Current Lc: ${worstLc.toFixed(1)}, Target: ${targetLc}. Manual review required.`
        );
      }
    }
  }
  
  // Generate updated tokens.css content
  if (!dryRun && changes.length > 0) {
    const originalContent = readFileSync(inputPath, 'utf-8');
    let updatedContent = originalContent;
    
    // Replace token values and add comments
    for (const change of changes) {
      const tokenName = change.tokenName;
      const mode = change.mode;
      const after = change.after;
      
      // Format HSL value
      const hslValue = `${after.h} ${after.s}% ${after.l}%`;
      
      // Find and replace the token value
      // We need to be careful to only replace in the correct mode section
      const modeSection = mode === 'dark' ? '.dark {' : ':root {';
      const modeEndMarker = mode === 'dark' ? /^\.dark \{[\s\S]*?\n\}/m : /^:root \{[\s\S]*?\n\}/m;
      
      // Find the mode section
      const modeSectionMatch = updatedContent.match(modeEndMarker);
      if (modeSectionMatch) {
        const modeSectionContent = modeSectionMatch[0];
        
        // Find the token line in this section
        const tokenRegex = new RegExp(`(--${tokenName}:\\s*)([^;]+)(;)`, 'g');
        const updatedModeSection = modeSectionContent.replace(tokenRegex, `$1${hslValue}$3`);
        
        // Replace the mode section in the full content
        updatedContent = updatedContent.replace(modeSectionContent, updatedModeSection);
      }
    }
    
    // Add Lc comments for all foreground tokens
    for (const fgToken of foregroundTokens) {
      const backgrounds = getBackgroundsForForeground(fgToken.name, tokens, fgToken.mode);
      const key = `${fgToken.name}-${fgToken.mode}`;
      const adjustedHsl = adjustedTokens.get(key) || fgToken.hsl;
      
      // Calculate Lc for each background
      const lcComments: string[] = [];
      for (const bgToken of backgrounds) {
        const fgRgb = hslToRgb(adjustedHsl);
        const bgRgb = hslToRgb(bgToken.hsl);
        const lc = calculateLc(fgRgb, bgRgb);
        lcComments.push(`${print(lc)} on --${bgToken.name}`);
      }
      
      // Add comment before the token line in the correct mode section
      const comment = `/* ${lcComments.join(', ')} */`;
      
      // Find the mode section
      const modeSection = fgToken.mode === 'dark' ? '.dark {' : ':root {';
      const modeEndMarker = fgToken.mode === 'dark' ? /^\.dark \{[\s\S]*?\n\}/m : /^:root \{[\s\S]*?\n\}/m;
      
      const modeSectionMatch = updatedContent.match(modeEndMarker);
      if (modeSectionMatch) {
        const modeSectionContent = modeSectionMatch[0];
        
        // Only add comment if it doesn't already exist in this mode section
        if (!modeSectionContent.includes(comment)) {
          const tokenRegex = new RegExp(`(--${fgToken.name}:)`, 'g');
          const updatedModeSection = modeSectionContent.replace(tokenRegex, `${comment}\n  $1`);
          
          // Replace the mode section in the full content
          updatedContent = updatedContent.replace(modeSectionContent, updatedModeSection);
        }
      }
    }
    
    // Write updated content to output file
    writeFileSync(outputPath, updatedContent, 'utf-8');
  }
  
  // Generate report
  const report: RecalculationReport = {
    totalTokens: foregroundTokens.length,
    tokensChanged: changes.length,
    changes,
    flaggedTokens,
  };
  
  return report;
}

/**
 * CLI entry point
 */
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const inputPath = args.find(arg => arg.startsWith('--input='))?.split('=')[1] || './src/tokens.css';
  const outputPath = args.find(arg => arg.startsWith('--output='))?.split('=')[1] || './src/tokens.css';
  
  console.log('=== APCA Token Recalculation ===');
  console.log(`Input: ${inputPath}`);
  console.log(`Output: ${outputPath}`);
  console.log(`Dry run: ${dryRun}`);
  console.log('');
  
  try {
    const report = recalculateTokens(inputPath, outputPath, dryRun);
    
    console.log('=== Recalculation Report ===');
    console.log(`Total foreground tokens: ${report.totalTokens}`);
    console.log(`Tokens changed: ${report.tokensChanged}`);
    console.log(`Tokens flagged for manual review: ${report.flaggedTokens.length}`);
    console.log('');
    
    if (report.changes.length > 0) {
      console.log('=== Changes ===');
      for (const change of report.changes) {
        console.log(`${change.tokenName} (${change.mode}):`);
        console.log(`  Before: ${change.before.h} ${change.before.s}% ${change.before.l}%`);
        console.log(`  After:  ${change.after.h} ${change.after.s}% ${change.after.l}%`);
        console.log(`  Lc: ${change.lcBefore.toFixed(1)} → ${change.lcAfter.toFixed(1)} (on --${change.background})`);
        console.log('');
      }
    }
    
    if (report.flaggedTokens.length > 0) {
      console.log('=== Flagged Tokens ===');
      for (const token of report.flaggedTokens) {
        console.log(`  - ${token}`);
      }
      console.log('');
    }
    
    if (dryRun) {
      console.log('Dry run complete. No files were modified.');
    } else {
      console.log(`Updated tokens written to ${outputPath}`);
    }
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
