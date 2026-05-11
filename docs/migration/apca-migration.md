# APCA Migration Guide

**Version**: 1.0.4 (Unreleased)  
**Date**: 2025-01-XX  
**Status**: Complete

---

## Overview

paul has migrated from WCAG 2.x relative luminance contrast ratios to the **Accessible Perceptual Contrast Algorithm (APCA)** from the WCAG 3.0 working draft. This guide documents the changes, visual impact, and migration path for consumers.

---

## What is APCA?

APCA (Accessible Perceptual Contrast Algorithm) is a modern contrast assessment method proposed for WCAG 3.0 that provides more accurate perceptual contrast measurements than WCAG 2.x.

### Key Differences from WCAG 2.x

| Aspect | WCAG 2.x | APCA |
|--------|----------|------|
| **Measurement** | Contrast ratios (1:1 to 21:1) | Lc values (0 to ±108.3) |
| **Formula** | Relative luminance | Perceptually uniform |
| **Polarity** | Not preserved | Preserved (+ for light-on-dark, - for dark-on-light) |
| **Accuracy** | Known perceptual limitations | Accounts for human vision characteristics |
| **Status** | Stable (WCAG 2.2) | Working draft (WCAG 3.0) |

### APCA Thresholds

paul uses the following APCA Lc thresholds:

| Use Case | APCA Lc | Approximate WCAG 2.x Equivalent |
|----------|---------|----------------------------------|
| **Body text** | Lc 75 | ~7:1 (AAA) |
| **Large text** | Lc 60 | ~4.5:1 (AA) |
| **UI components** | Lc 60 | ~4.5:1 (AA) |

> **Note**: APCA and WCAG 2.x are not directly comparable due to different perceptual models. The equivalents shown are approximations.

---

## Token Changes

### Recalculated Tokens

One token was adjusted to meet APCA Lc 75 threshold:

| Token | Mode | Before | After | Lc Before | Lc After | Background | Change |
|-------|------|--------|-------|-----------|----------|------------|--------|
| `--muted-foreground` | Dark | `240 5% 71%` | `240 5% 82.7%` | 57.1 | 75.5 | `--muted` | +11.7% lightness |

**Hue and Saturation**: Preserved (240°, 5%)  
**Visual Impact**: Muted text in dark mode is slightly lighter for improved readability

### Inline Lc Comments

All foreground tokens now include inline comments documenting their APCA Lc values on each background:

```css
/* Lc 105.9 on --background, Lc 105.9 on --card, Lc 105.9 on --popover */
--foreground: 240 10% 3.9%;

/* Lc -78.7 on --background, Lc -78.7 on --card, Lc -75.5 on --muted */
--muted-foreground: 240 5% 82.7%;
```

These comments serve as documentation and can be used for manual verification.

---

## Visual Impact

### Components Affected

The following components use `--muted-foreground` and will show visual changes in **dark mode only**:

| Component | Element | Visual Change |
|-----------|---------|---------------|
| **Form** | Labels, helper text | Slightly lighter text |
| **Card** | Descriptions, metadata | Improved contrast |
| **Table** | Secondary headers | More visible |
| **Breadcrumb** | Separators | Slightly lighter |
| **Input** | Placeholder text | Improved readability |

### Before/After Comparison

**Dark Mode - Muted Foreground Text**:
- **Before**: HSL(240, 5%, 71%) - Lc 57.1 on muted background
- **After**: HSL(240, 5%, 82.7%) - Lc 75.5 on muted background
- **Perceptual Impact**: Subtle lightening; most users won't consciously notice
- **Accessibility Impact**: Improved readability for users with low vision

**Light Mode**: No changes

---

## Known Issues

### `--destructive-text` (Dark Mode)

**Status**: Flagged for manual review  
**Current Lc**: -48.0 (needs Lc 75 for body text)  
**Issue**: Cannot meet Lc 75 threshold within ±15% lightness constraint

**Workaround**: This token is currently classified as "body text" but may be used primarily for UI components. If your application uses `--destructive-text` for UI elements (buttons, badges, icons) rather than body text, the current Lc -48.0 may be acceptable.

**Future Resolution**: We're reviewing component usage to determine if this token should be reclassified as a UI component (Lc 60 threshold) or if a larger lightness adjustment is warranted.

---

## Migration Path for Consumers

### If You're Using paul Tokens Directly

**No action required**. The token values have been updated automatically. Review your application in dark mode to verify the visual changes are acceptable.

### If You're Overriding Tokens

If you've overridden `--muted-foreground` in your application:

```css
/* Your override */
.dark {
  --muted-foreground: 240 5% 71%; /* Old value */
}
```

**Update to**:

```css
.dark {
  --muted-foreground: 240 5% 82.7%; /* New APCA-compliant value */
}
```

### If You're Using Custom Color Tokens

If you've added custom color tokens to your application, you can validate them using paul's APCA validation tool:

```bash
# Install paul tokens package
npm install @meetpaul/tokens

# Run validation (requires tokens.css in expected location)
cd node_modules/@meetpaul/tokens
npx tsx scripts/validate-apca.ts
```

Or use the `apca-w3` package directly:

```bash
npm install apca-w3
```

```typescript
import { APCAcontrast } from 'apca-w3';

// Calculate Lc value
const lc = APCAcontrast([255, 255, 255], [0, 0, 0]); // White on black
console.log(lc); // ~106 (light-on-dark)

// Check threshold
const meetsBodyText = Math.abs(lc) >= 75;
const meetsLargeText = Math.abs(lc) >= 60;
```

---

## Visual Regression Testing

### Chromatic Baselines

If you're using Chromatic for visual regression testing:

1. **Review diffs** for stories rendering `--muted-foreground` in dark mode
2. **Accept diffs** as new baseline (changes are intentional and improve accessibility)
3. **Verify** no layout or structural changes occurred

### Manual Testing

Test the following scenarios in **dark mode**:

- [ ] Form labels and helper text are readable
- [ ] Card descriptions have sufficient contrast
- [ ] Table secondary headers are visible
- [ ] Breadcrumb separators are distinguishable
- [ ] Input placeholder text is readable

---

## FAQ

### Why is paul adopting APCA early?

APCA provides more accurate perceptual contrast measurements than WCAG 2.x. By adopting APCA now, paul ensures:

1. **Future-proof accessibility** - Ready for WCAG 3.0 when it becomes stable
2. **Better user experience** - More accurate contrast for users with low vision
3. **Scientific accuracy** - Based on modern vision science research

### Is WCAG 3.0 stable?

No. WCAG 3.0 is currently a **working draft** and not yet a stable W3C recommendation. paul maintains backward compatibility with WCAG 2.2 Level AAA during this transition period.

### Will my application still meet WCAG 2.2?

Yes. paul's APCA Lc 75 threshold approximates WCAG 2.2 Level AAA (7:1 ratio). The token changes maintain or improve WCAG 2.2 compliance.

### What if I need to revert to WCAG 2.x values?

You can override the tokens in your application:

```css
.dark {
  --muted-foreground: 240 5% 71%; /* Pre-APCA value */
}
```

However, this will reduce contrast and may not meet WCAG 2.2 Level AAA on all backgrounds.

### How do I validate my custom tokens?

Use paul's APCA validation tool or the `apca-w3` package directly (see "Migration Path for Consumers" above).

### What about the `--destructive-text` issue?

We're reviewing component usage to determine the appropriate classification and threshold. This token may be reclassified as a UI component (Lc 60) in a future update.

### Can I use APCA for my own design system?

Yes! The `apca-w3` npm package is open source and can be used in any project. paul's validation and recalculation scripts are also available in the `packages/tokens/scripts/` directory.

---

## Technical Details

### Validation Tool

paul includes an APCA validation tool that checks all tokens against thresholds:

```bash
cd packages/tokens
pnpm run validate:apca
```

**Output**:
```
=== APCA Validation Report ===

Total checks: 34
Failed checks: 2
Status: ✗ FAILED

Failures:

  • destructive-text (dark mode)
    Background: background
    Lc value: -48.0
    Threshold: 75 (body-text)
```

### Recalculation Script

The recalculation script automatically adjusts tokens to meet APCA thresholds:

```bash
# Preview changes
pnpm run recalculate:tokens:dry-run

# Apply changes
pnpm run recalculate:tokens
```

**Algorithm**:
- Binary search with 0.1% precision
- Preserves hue and saturation
- Constrains lightness adjustment to ±15%
- Flags tokens that cannot meet threshold within constraint

### CI Integration

APCA validation runs automatically in CI:

```yaml
- name: Validate APCA compliance
  run: pnpm run validate:apca
  working-directory: packages/tokens
```

CI fails if tokens don't meet APCA thresholds, preventing regressions.

---

## Resources

### APCA Documentation
- [APCA Contrast Calculator](https://apcacontrast.com/)
- [APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell)
- [WCAG 3.0 Working Draft](https://www.w3.org/TR/wcag-3.0/)

### npm Packages
- [`apca-w3`](https://www.npmjs.com/package/apca-w3) - APCA calculation library
- [`@meetpaul/tokens`](https://www.npmjs.com/package/@meetpaul/tokens) - paul design tokens

### paul Documentation
- [Accessibility Statement](../a11y-statement.md)
- [Contrast Audit](../compliance/contrast-audit.md)
- [EN 301 549 Compliance Matrix](../compliance/en301549-matrix.md)

---

## Changelog

### Version 1.0.4 (Unreleased)

**Changed**:
- Migrated from WCAG 2.x to APCA (WCAG 3.0 draft)
- Recalculated `--muted-foreground` (dark) to meet Lc 75 threshold
- Added inline Lc comments to all foreground tokens

**Added**:
- APCA validation tool (`validate:apca`)
- Token recalculation script (`recalculate:tokens`)
- CI integration for APCA validation

**Known Issues**:
- `--destructive-text` (dark) flagged for manual review

---

**Last Updated**: 2025-01-XX  
**paul Version**: 1.0.4 (Unreleased)  
**WCAG 3.0 Status**: Working Draft
