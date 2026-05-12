/**
 * Debug script to test adjustLightness function
 */

import { adjustLightness } from './recalculate-tokens';
import { calculateLc, hslToRgb, type HSL } from './apca-calculator';

// Test case 1: should preserve hue and saturation
console.log('=== Test 1: Basic functionality ===');
const color1: HSL = { h: 240, s: 5, l: 33 };
const background1: HSL = { h: 0, s: 0, l: 100 };
const targetLc1 = 75;

const currentRgb1 = hslToRgb(color1);
const bgRgb1 = hslToRgb(background1);
const currentLc1 = Math.abs(calculateLc(currentRgb1, bgRgb1));
console.log(`Current Lc: ${currentLc1.toFixed(2)}`);
console.log(`Target Lc: ${targetLc1}`);

const adjusted1 = adjustLightness(color1, background1, targetLc1);
console.log(`Adjusted: ${JSON.stringify(adjusted1)}`);

if (adjusted1) {
  const adjustedRgb1 = hslToRgb(adjusted1);
  const adjustedLc1 = Math.abs(calculateLc(adjustedRgb1, bgRgb1));
  console.log(`Adjusted Lc: ${adjustedLc1.toFixed(2)}`);
}

// Test case 2: Light gray on white
console.log('\n=== Test 2: Light gray on white ===');
const color2: HSL = { h: 0, s: 0, l: 90 };
const background2: HSL = { h: 0, s: 0, l: 100 };
const targetLc2 = 60;

const currentRgb2 = hslToRgb(color2);
const bgRgb2 = hslToRgb(background2);
const currentLc2 = Math.abs(calculateLc(currentRgb2, bgRgb2));
console.log(`Current Lc: ${currentLc2.toFixed(2)}`);
console.log(`Target Lc: ${targetLc2}`);
console.log(`Lightness range: ${Math.max(0, 90 - 15)} to ${Math.min(100, 90 + 15)}`);

const adjusted2 = adjustLightness(color2, background2, targetLc2);
console.log(`Adjusted: ${JSON.stringify(adjusted2)}`);

if (adjusted2) {
  const adjustedRgb2 = hslToRgb(adjusted2);
  const adjustedLc2 = Math.abs(calculateLc(adjustedRgb2, bgRgb2));
  console.log(`Adjusted Lc: ${adjustedLc2.toFixed(2)}`);
}

// Test case 3: Dark gray on dark background
console.log('\n=== Test 3: Dark gray on dark background ===');
const color3: HSL = { h: 0, s: 0, l: 15 };
const background3: HSL = { h: 0, s: 0, l: 10 };
const targetLc3 = 60;

const currentRgb3 = hslToRgb(color3);
const bgRgb3 = hslToRgb(background3);
const currentLc3 = Math.abs(calculateLc(currentRgb3, bgRgb3));
console.log(`Current Lc: ${currentLc3.toFixed(2)}`);
console.log(`Target Lc: ${targetLc3}`);
console.log(`Lightness range: ${Math.max(0, 15 - 15)} to ${Math.min(100, 15 + 15)}`);

const adjusted3 = adjustLightness(color3, background3, targetLc3);
console.log(`Adjusted: ${JSON.stringify(adjusted3)}`);

if (adjusted3) {
  const adjustedRgb3 = hslToRgb(adjusted3);
  const adjustedLc3 = Math.abs(calculateLc(adjustedRgb3, bgRgb3));
  console.log(`Adjusted Lc: ${adjustedLc3.toFixed(2)}`);
}

// Test case 4: Identical colors
console.log('\n=== Test 4: Identical colors ===');
const color4: HSL = { h: 0, s: 0, l: 50 };
const background4: HSL = { h: 0, s: 0, l: 50 };
const targetLc4 = 60;

const currentRgb4 = hslToRgb(color4);
const bgRgb4 = hslToRgb(background4);
const currentLc4 = Math.abs(calculateLc(currentRgb4, bgRgb4));
console.log(`Current Lc: ${currentLc4.toFixed(2)}`);
console.log(`Target Lc: ${targetLc4}`);
console.log(`Lightness range: ${Math.max(0, 50 - 15)} to ${Math.min(100, 50 + 15)}`);

const adjusted4 = adjustLightness(color4, background4, targetLc4);
console.log(`Adjusted: ${JSON.stringify(adjusted4)}`);

if (adjusted4) {
  const adjustedRgb4 = hslToRgb(adjusted4);
  const adjustedLc4 = Math.abs(calculateLc(adjustedRgb4, bgRgb4));
  console.log(`Adjusted Lc: ${adjustedLc4.toFixed(2)}`);
}
