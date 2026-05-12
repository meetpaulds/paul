/**
 * Unit tests for Token Usage Map and Parsing Utilities
 */

import { describe, it, expect } from 'vitest';
import {
  TOKEN_USAGE_MAP,
  HSL_REGEX,
  isValidHSL,
  parseHSL,
  parseTokensFile,
  getForegroundTokens,
  getBackgroundTokens,
  getBackgroundsForForeground,
} from './token-usage-map';

describe('Token Usage Map', () => {
  it('should define foreground-background mappings', () => {
    expect(TOKEN_USAGE_MAP).toBeDefined();
    expect(Object.keys(TOKEN_USAGE_MAP).length).toBeGreaterThan(0);
  });

  it('should map foreground to background token', () => {
    expect(TOKEN_USAGE_MAP['foreground']).toContain('background');
  });

  it('should map muted-foreground to multiple backgrounds', () => {
    expect(TOKEN_USAGE_MAP['muted-foreground']).toEqual(['background', 'muted', 'card']);
  });

  it('should map card-foreground to card background', () => {
    expect(TOKEN_USAGE_MAP['card-foreground']).toEqual(['card']);
  });
});

describe('HSL Regex', () => {
  it('should match valid HSL format with integers', () => {
    expect(HSL_REGEX.test('240 5% 10%')).toBe(true);
    expect(HSL_REGEX.test('0 0% 100%')).toBe(true);
    expect(HSL_REGEX.test('360 100% 50%')).toBe(true);
  });

  it('should match valid HSL format with decimals', () => {
    expect(HSL_REGEX.test('240 5.9% 10%')).toBe(true);
    expect(HSL_REGEX.test('240 10% 3.9%')).toBe(true);
    expect(HSL_REGEX.test('0 84.2% 50%')).toBe(true);
  });

  it('should not match invalid HSL formats', () => {
    expect(HSL_REGEX.test('240 5.9 10')).toBe(false); // Missing %
    expect(HSL_REGEX.test('240, 5.9%, 10%')).toBe(false); // Commas
    expect(HSL_REGEX.test('hsl(240 5.9% 10%)')).toBe(false); // hsl() wrapper
    expect(HSL_REGEX.test('invalid')).toBe(false);
    expect(HSL_REGEX.test('')).toBe(false);
  });
});

describe('isValidHSL', () => {
  it('should return true for valid HSL strings', () => {
    expect(isValidHSL('240 5.9% 10%')).toBe(true);
    expect(isValidHSL('0 0% 100%')).toBe(true);
    expect(isValidHSL('360 100% 50%')).toBe(true);
  });

  it('should return false for invalid HSL strings', () => {
    expect(isValidHSL('240 5.9 10')).toBe(false);
    expect(isValidHSL('invalid')).toBe(false);
    expect(isValidHSL('')).toBe(false);
  });
});

describe('parseHSL', () => {
  it('should parse valid HSL string with integers', () => {
    const result = parseHSL('240 5% 10%', 'test-token', 1);
    expect(result).toEqual({ h: 240, s: 5, l: 10 });
  });

  it('should parse valid HSL string with decimals', () => {
    const result = parseHSL('240 5.9% 10%', 'test-token', 1);
    expect(result).toEqual({ h: 240, s: 5.9, l: 10 });
  });

  it('should parse pure black', () => {
    const result = parseHSL('0 0% 0%', 'black', 1);
    expect(result).toEqual({ h: 0, s: 0, l: 0 });
  });

  it('should parse pure white', () => {
    const result = parseHSL('0 0% 100%', 'white', 1);
    expect(result).toEqual({ h: 0, s: 0, l: 100 });
  });

  it('should throw error for invalid HSL format', () => {
    expect(() => parseHSL('240 5.9 10', 'test-token', 1)).toThrow(
      'Invalid HSL format for token "test-token" at line 1'
    );
  });

  it('should throw error for invalid hue range', () => {
    expect(() => parseHSL('400 5% 10%', 'test-token', 1)).toThrow(
      'Invalid hue value for token "test-token" at line 1: 400'
    );
  });

  it('should throw error for invalid saturation range', () => {
    expect(() => parseHSL('240 150% 10%', 'test-token', 1)).toThrow(
      'Invalid saturation value for token "test-token" at line 1: 150'
    );
  });

  it('should throw error for invalid lightness range', () => {
    expect(() => parseHSL('240 5% 150%', 'test-token', 1)).toThrow(
      'Invalid lightness value for token "test-token" at line 1: 150'
    );
  });
});

describe('parseTokensFile', () => {
  it('should parse tokens.css and extract color tokens', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    
    expect(tokens.length).toBeGreaterThan(0);
    expect(tokens[0]).toHaveProperty('name');
    expect(tokens[0]).toHaveProperty('cssVariable');
    expect(tokens[0]).toHaveProperty('hsl');
    expect(tokens[0]).toHaveProperty('mode');
    expect(tokens[0]).toHaveProperty('lineNumber');
  });

  it('should parse both light and dark mode tokens', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    
    const lightTokens = tokens.filter(t => t.mode === 'light');
    const darkTokens = tokens.filter(t => t.mode === 'dark');
    
    expect(lightTokens.length).toBeGreaterThan(0);
    expect(darkTokens.length).toBeGreaterThan(0);
  });

  it('should parse foreground token correctly', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const foreground = tokens.find(t => t.name === 'foreground' && t.mode === 'light');
    
    expect(foreground).toBeDefined();
    expect(foreground?.cssVariable).toBe('--foreground');
    expect(foreground?.hsl).toHaveProperty('h');
    expect(foreground?.hsl).toHaveProperty('s');
    expect(foreground?.hsl).toHaveProperty('l');
  });

  it('should skip non-color tokens', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    
    // Should not include --radius or --font-* tokens
    expect(tokens.find(t => t.name === 'radius')).toBeUndefined();
    expect(tokens.find(t => t.name.startsWith('font-'))).toBeUndefined();
  });

  it('should skip chart tokens', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    
    // Should not include --chart-* tokens
    expect(tokens.find(t => t.name.startsWith('chart-'))).toBeUndefined();
  });
});

describe('getForegroundTokens', () => {
  it('should return only foreground tokens', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const foregrounds = getForegroundTokens(tokens);
    
    expect(foregrounds.length).toBeGreaterThan(0);
    foregrounds.forEach(token => {
      expect(
        token.name === 'foreground' || 
        token.name.endsWith('-foreground') ||
        token.name === 'destructive-text'
      ).toBe(true);
    });
  });

  it('should include destructive-text as a foreground token', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const foregrounds = getForegroundTokens(tokens);
    
    expect(foregrounds.find(t => t.name === 'destructive-text')).toBeDefined();
  });
});

describe('getBackgroundTokens', () => {
  it('should return only background tokens', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const backgrounds = getBackgroundTokens(tokens);
    
    expect(backgrounds.length).toBeGreaterThan(0);
  });

  it('should include background token', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const backgrounds = getBackgroundTokens(tokens);
    
    expect(backgrounds.find(t => t.name === 'background')).toBeDefined();
  });

  it('should include card token', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const backgrounds = getBackgroundTokens(tokens);
    
    expect(backgrounds.find(t => t.name === 'card')).toBeDefined();
  });
});

describe('getBackgroundsForForeground', () => {
  it('should return backgrounds for foreground token', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const backgrounds = getBackgroundsForForeground('foreground', tokens, 'light');
    
    expect(backgrounds.length).toBeGreaterThan(0);
    expect(backgrounds.find(t => t.name === 'background')).toBeDefined();
  });

  it('should return multiple backgrounds for muted-foreground', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const backgrounds = getBackgroundsForForeground('muted-foreground', tokens, 'light');
    
    expect(backgrounds.length).toBe(3);
    expect(backgrounds.find(t => t.name === 'background')).toBeDefined();
    expect(backgrounds.find(t => t.name === 'muted')).toBeDefined();
    expect(backgrounds.find(t => t.name === 'card')).toBeDefined();
  });

  it('should return only tokens in the specified mode', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    const lightBackgrounds = getBackgroundsForForeground('foreground', tokens, 'light');
    const darkBackgrounds = getBackgroundsForForeground('foreground', tokens, 'dark');
    
    lightBackgrounds.forEach(token => {
      expect(token.mode).toBe('light');
    });
    
    darkBackgrounds.forEach(token => {
      expect(token.mode).toBe('dark');
    });
  });

  it('should throw error for unknown foreground token', () => {
    const tokens = parseTokensFile('./src/tokens.css');
    
    expect(() => getBackgroundsForForeground('unknown-token', tokens, 'light')).toThrow(
      'Foreground token "unknown-token" not found in TOKEN_USAGE_MAP'
    );
  });
});
