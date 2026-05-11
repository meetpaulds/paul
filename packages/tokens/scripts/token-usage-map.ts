/**
 * Token Usage Map and Parsing Utilities
 * 
 * This module defines which foreground tokens appear on which backgrounds
 * and provides utilities to parse tokens.css and extract HSL color values.
 */

import { readFileSync } from 'fs';
import type { HSL } from './apca-calculator';

/**
 * Token Usage Map
 * 
 * Defines which foreground tokens appear on which background tokens.
 * This map is used by the token recalculation script to determine
 * which foreground-background pairs need APCA validation.
 * 
 * Key: foreground token name (without -- prefix)
 * Value: array of background token names (without -- prefix)
 */
export const TOKEN_USAGE_MAP: Record<string, string[]> = {
  'foreground': ['background', 'card', 'popover'],
  'card-foreground': ['card'],
  'popover-foreground': ['popover'],
  'primary-foreground': ['primary'],
  'secondary-foreground': ['secondary'],
  'muted-foreground': ['background', 'muted', 'card'],
  'accent-foreground': ['accent'],
  'destructive-foreground': ['destructive'],
  'destructive-text': ['background', 'card'],
  'sidebar-foreground': ['sidebar'],
  'sidebar-primary-foreground': ['sidebar-primary'],
  'sidebar-accent-foreground': ['sidebar-accent'],
};

/**
 * Parsed token data structure
 */
export interface ParsedToken {
  name: string;           // Token name without -- prefix (e.g., "muted-foreground")
  cssVariable: string;    // Full CSS variable name (e.g., "--muted-foreground")
  hsl: HSL;              // HSL color values
  mode: 'light' | 'dark'; // Color mode (light or dark)
  lineNumber: number;     // Line number in tokens.css
}

/**
 * HSL format regex
 * Matches HSL values in the format: "H S% L%" where:
 * - H is hue (0-360, can have decimals)
 * - S is saturation (0-100%, can have decimals)
 * - L is lightness (0-100%, can have decimals)
 * 
 * Examples:
 * - "240 5.9% 10%"
 * - "0 0% 100%"
 * - "240 10% 3.9%"
 */
export const HSL_REGEX = /^(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$/;

/**
 * Validate HSL format
 * 
 * @param hslString - HSL string to validate
 * @returns true if valid, false otherwise
 * 
 * @example
 * isValidHSL("240 5.9% 10%") // true
 * isValidHSL("240 5.9 10") // false (missing %)
 * isValidHSL("invalid") // false
 */
export function isValidHSL(hslString: string): boolean {
  return HSL_REGEX.test(hslString);
}

/**
 * Parse HSL string into HSL object
 * 
 * @param hslString - HSL string in format "H S% L%"
 * @param tokenName - Token name for error messages
 * @param lineNumber - Line number for error messages
 * @returns HSL object with h, s, l values
 * @throws Error if HSL format is invalid
 * 
 * @example
 * parseHSL("240 5.9% 10%", "primary", 1) 
 * // returns { h: 240, s: 5.9, l: 10 }
 */
export function parseHSL(
  hslString: string,
  tokenName: string,
  lineNumber: number
): HSL {
  const match = hslString.match(HSL_REGEX);
  
  if (!match) {
    throw new Error(
      `Invalid HSL format for token "${tokenName}" at line ${lineNumber}: "${hslString}". ` +
      `Expected format: "H S% L%" (e.g., "240 5.9% 10%")`
    );
  }
  
  const h = parseFloat(match[1]);
  const s = parseFloat(match[2]);
  const l = parseFloat(match[3]);
  
  // Validate ranges
  if (h < 0 || h > 360) {
    throw new Error(
      `Invalid hue value for token "${tokenName}" at line ${lineNumber}: ${h}. ` +
      `Hue must be between 0 and 360.`
    );
  }
  
  if (s < 0 || s > 100) {
    throw new Error(
      `Invalid saturation value for token "${tokenName}" at line ${lineNumber}: ${s}. ` +
      `Saturation must be between 0 and 100.`
    );
  }
  
  if (l < 0 || l > 100) {
    throw new Error(
      `Invalid lightness value for token "${tokenName}" at line ${lineNumber}: ${l}. ` +
      `Lightness must be between 0 and 100.`
    );
  }
  
  return { h, s, l };
}

/**
 * Parse tokens.css file and extract all color tokens
 * 
 * @param tokensPath - Path to tokens.css file
 * @returns Array of parsed tokens
 * @throws Error if file cannot be read or tokens cannot be parsed
 * 
 * @example
 * const tokens = parseTokensFile('./packages/tokens/src/tokens.css');
 * // Returns array of ParsedToken objects
 */
export function parseTokensFile(tokensPath: string): ParsedToken[] {
  const content = readFileSync(tokensPath, 'utf-8');
  const lines = content.split('\n');
  const tokens: ParsedToken[] = [];
  
  let currentMode: 'light' | 'dark' = 'light';
  let inDarkMode = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const lineNumber = i + 1;
    
    // Detect dark mode section
    if (line.startsWith('.dark {')) {
      inDarkMode = true;
      currentMode = 'dark';
      continue;
    }
    
    // Detect end of dark mode section
    if (inDarkMode && line === '}') {
      inDarkMode = false;
      currentMode = 'light';
      continue;
    }
    
    // Match CSS variable declarations
    // Format: --token-name: H S% L%;
    const tokenMatch = line.match(/^--([a-z-]+):\s*(.+);$/);
    
    if (tokenMatch) {
      const tokenName = tokenMatch[1];
      const value = tokenMatch[2].trim();
      
      // Skip non-color tokens (e.g., --radius, --font-sans)
      if (tokenName === 'radius' || tokenName.startsWith('font-')) {
        continue;
      }
      
      // Skip chart tokens (they are not used for text/background contrast)
      if (tokenName.startsWith('chart-')) {
        continue;
      }
      
      // Parse HSL value
      try {
        const hsl = parseHSL(value, tokenName, lineNumber);
        
        tokens.push({
          name: tokenName,
          cssVariable: `--${tokenName}`,
          hsl,
          mode: currentMode,
          lineNumber,
        });
      } catch (error) {
        // Re-throw with additional context
        throw new Error(
          `Failed to parse token at line ${lineNumber}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
  }
  
  return tokens;
}

/**
 * Get all foreground tokens from parsed tokens
 * 
 * @param tokens - Array of parsed tokens
 * @returns Array of foreground tokens
 * 
 * @example
 * const tokens = parseTokensFile('./tokens.css');
 * const foregrounds = getForegroundTokens(tokens);
 * // Returns tokens with names ending in "-foreground" or "foreground"
 */
export function getForegroundTokens(tokens: ParsedToken[]): ParsedToken[] {
  return tokens.filter(token => 
    token.name === 'foreground' || 
    token.name.endsWith('-foreground') ||
    token.name === 'destructive-text' // Special case: destructive-text is also a foreground
  );
}

/**
 * Get all background tokens from parsed tokens
 * 
 * @param tokens - Array of parsed tokens
 * @returns Array of background tokens
 * 
 * @example
 * const tokens = parseTokensFile('./tokens.css');
 * const backgrounds = getBackgroundTokens(tokens);
 * // Returns tokens that are used as backgrounds
 */
export function getBackgroundTokens(tokens: ParsedToken[]): ParsedToken[] {
  // Get all unique background names from TOKEN_USAGE_MAP
  const backgroundNames = new Set<string>();
  Object.values(TOKEN_USAGE_MAP).forEach(backgrounds => {
    backgrounds.forEach(bg => backgroundNames.add(bg));
  });
  
  return tokens.filter(token => backgroundNames.has(token.name));
}

/**
 * Get background tokens for a specific foreground token
 * 
 * @param foregroundName - Name of the foreground token (without -- prefix)
 * @param allTokens - Array of all parsed tokens
 * @param mode - Color mode ('light' or 'dark')
 * @returns Array of background tokens that this foreground appears on
 * @throws Error if foreground token is not in TOKEN_USAGE_MAP
 * 
 * @example
 * const tokens = parseTokensFile('./tokens.css');
 * const backgrounds = getBackgroundsForForeground('muted-foreground', tokens, 'light');
 * // Returns background, muted, and card tokens in light mode
 */
export function getBackgroundsForForeground(
  foregroundName: string,
  allTokens: ParsedToken[],
  mode: 'light' | 'dark'
): ParsedToken[] {
  const backgroundNames = TOKEN_USAGE_MAP[foregroundName];
  
  if (!backgroundNames) {
    throw new Error(
      `Foreground token "${foregroundName}" not found in TOKEN_USAGE_MAP. ` +
      `Available tokens: ${Object.keys(TOKEN_USAGE_MAP).join(', ')}`
    );
  }
  
  return allTokens.filter(
    token => backgroundNames.includes(token.name) && token.mode === mode
  );
}
