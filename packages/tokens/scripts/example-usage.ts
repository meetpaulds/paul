/**
 * Example usage of token-usage-map utilities
 * 
 * This script demonstrates how to use the token parsing utilities
 * to analyze color tokens and their relationships.
 */

import {
  parseTokensFile,
  getForegroundTokens,
  getBackgroundTokens,
  getBackgroundsForForeground,
  TOKEN_USAGE_MAP,
} from './token-usage-map';

// Parse the tokens.css file
const tokens = parseTokensFile('./src/tokens.css');

console.log('=== Token Statistics ===');
console.log(`Total tokens parsed: ${tokens.length}`);
console.log(`Foreground tokens: ${getForegroundTokens(tokens).length}`);
console.log(`Background tokens: ${getBackgroundTokens(tokens).length}`);

console.log('\n=== Token Usage Map ===');
console.log('Foreground → Backgrounds:');
Object.entries(TOKEN_USAGE_MAP).forEach(([foreground, backgrounds]) => {
  console.log(`  ${foreground} → ${backgrounds.join(', ')}`);
});

console.log('\n=== Sample Token Analysis ===');
const mutedForeground = tokens.find(t => t.name === 'muted-foreground' && t.mode === 'light');
if (mutedForeground) {
  console.log('Token: muted-foreground (light mode)');
  console.log(`  HSL: ${mutedForeground.hsl.h} ${mutedForeground.hsl.s}% ${mutedForeground.hsl.l}%`);
  console.log(`  CSS Variable: ${mutedForeground.cssVariable}`);
  console.log(`  Line Number: ${mutedForeground.lineNumber}`);
  
  const backgrounds = getBackgroundsForForeground('muted-foreground', tokens, 'light');
  console.log(`  Appears on ${backgrounds.length} backgrounds:`);
  backgrounds.forEach(bg => {
    console.log(`    - ${bg.name}: ${bg.hsl.h} ${bg.hsl.s}% ${bg.hsl.l}%`);
  });
}

console.log('\n=== Light vs Dark Mode ===');
const lightTokens = tokens.filter(t => t.mode === 'light');
const darkTokens = tokens.filter(t => t.mode === 'dark');
console.log(`Light mode tokens: ${lightTokens.length}`);
console.log(`Dark mode tokens: ${darkTokens.length}`);

// Example: Compare foreground token in light vs dark mode
const foregroundLight = tokens.find(t => t.name === 'foreground' && t.mode === 'light');
const foregroundDark = tokens.find(t => t.name === 'foreground' && t.mode === 'dark');

if (foregroundLight && foregroundDark) {
  console.log('\nForeground token comparison:');
  console.log(`  Light: ${foregroundLight.hsl.h} ${foregroundLight.hsl.s}% ${foregroundLight.hsl.l}%`);
  console.log(`  Dark:  ${foregroundDark.hsl.h} ${foregroundDark.hsl.s}% ${foregroundDark.hsl.l}%`);
}
