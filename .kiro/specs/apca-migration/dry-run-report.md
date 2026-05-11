# APCA Token Recalculation Dry-Run Report

**Date**: 2024-01-XX  
**Task**: 7.1 Run token recalculation in dry-run mode  
**Script**: `packages/tokens/scripts/recalculate-tokens.ts`  
**Command**: `pnpm run recalculate:tokens:dry-run`

---

## Executive Summary

The APCA token recalculation script executed successfully in dry-run mode. Out of 24 foreground tokens analyzed:

- **1 token requires automatic adjustment** to meet APCA Lc 75 threshold
- **1 token flagged for manual review** (cannot meet threshold within ±15% lightness constraint)
- **22 tokens already compliant** with APCA thresholds

No files were modified during this dry-run execution.

---

## Detailed Findings

### Tokens Requiring Automatic Adjustment

#### 1. `--muted-foreground` (dark mode)

**Current State**:
- HSL Value: `240 5% 71%`
- APCA Lc on `--muted` background: **57.1**
- Target Lc: **75** (body text threshold)
- Status: **Below threshold**

**Proposed Adjustment**:
- New HSL Value: `240 5% 82.7%`
- New APCA Lc on `--muted` background: **75.5**
- Lightness change: **+11.7%** (within ±15% constraint)
- Hue preserved: ✓
- Saturation preserved: ✓

**Visual Impact**:
- The muted foreground text in dark mode will become **lighter** (more contrast)
- This affects secondary text, labels, and muted UI elements
- Change is perceptually subtle but improves readability

**Background Context**:
- `--muted` background (dark mode): `240 3.7% 15.9%`
- This token is used for body text on muted backgrounds
- APCA Lc 75 ensures AAA-equivalent readability

---

### Tokens Flagged for Manual Review

#### 1. `--destructive-text` (dark mode)

**Current State**:
- HSL Value: `0 90% 70%`
- Status: **Cannot meet Lc 75 within ±15% lightness constraint**

**Issue**:
The script attempted to adjust the lightness to meet the APCA Lc 75 threshold for body text, but the required adjustment exceeds the ±15% constraint designed to preserve visual identity.

**Possible Reasons**:
1. The hue (red, 0°) and high saturation (90%) may limit achievable contrast
2. The background(s) this token appears on may be too similar in luminance
3. The token may need a larger lightness adjustment or a different approach (hue/saturation adjustment)

**Backgrounds Tested**:
Based on the token usage map in the design document:
- `--background` (dark mode): `240 10% 3.9%`
- `--card` (dark mode): `240 10% 3.9%`

**Recommendations**:
1. **Option A**: Increase the lightness constraint to ±20% or ±25% for this specific token
2. **Option B**: Adjust saturation in addition to lightness to achieve target contrast
3. **Option C**: Re-evaluate the use case — if this token is used for large text or UI components (not body text), target Lc 60 instead of Lc 75
4. **Option D**: Manual color adjustment by designer to find a perceptually similar color that meets the threshold

**Next Steps**:
- Review component usage to determine actual use case (body text vs. large text vs. UI component)
- If body text: pursue Option A or B
- If large text/UI component: update token usage map and re-run with Lc 60 target
- If neither works: designer manual adjustment (Option D)

---

## Token Compliance Summary

| Category | Count | Percentage |
|----------|-------|------------|
| Already compliant | 22 | 91.7% |
| Requires automatic adjustment | 1 | 4.2% |
| Requires manual review | 1 | 4.2% |
| **Total foreground tokens** | **24** | **100%** |

---

## Expected Visual Changes

### Components Affected by `--muted-foreground` (dark mode) Adjustment

The following components use `--muted-foreground` and will show visual changes in dark mode:

1. **Form Labels**: Secondary labels and helper text will be slightly lighter
2. **Card Descriptions**: Muted descriptive text in cards will have improved contrast
3. **Table Headers**: Secondary table headers may appear lighter
4. **Breadcrumb Separators**: Muted separators will be more visible
5. **Placeholder Text**: Input placeholder text will be slightly lighter

**Perceptual Impact**:
- Change is **subtle** — most users will not consciously notice the difference
- Improved readability for users with low vision or in low-light conditions
- Maintains visual hierarchy (muted text remains visually secondary to primary text)

### Visual Regression Testing

**Chromatic Baseline Update Required**: Yes

**Expected Diffs**:
- Dark mode stories using `--muted-foreground` will show lighter text
- No layout or structural changes expected
- Color hue and saturation remain unchanged (only lightness adjusted)

**Stories to Review**:
- Form components (labels, helper text)
- Card components (descriptions, metadata)
- Table components (secondary headers)
- Navigation components (breadcrumbs, secondary links)

---

## APCA Thresholds Applied

The recalculation script uses the following APCA Lc thresholds:

| Use Case | APCA Lc Threshold | WCAG 2.x Equivalent |
|----------|-------------------|---------------------|
| Body text | **Lc 75** | ~7:1 (AAA) |
| Large text | **Lc 60** | ~4.5:1 (AA) |
| UI components | **Lc 60** | ~4.5:1 (AA) |

**Token Use Case Classification**:
- `--foreground`, `--card-foreground`, `--popover-foreground`: Body text (Lc 75)
- `--muted-foreground`: Body text (Lc 75)
- `--destructive-text`: Body text (Lc 75) ← **May need reclassification**
- All other foreground tokens: UI components (Lc 60)

---

## Validation Against Requirements

### Requirement 2.1: Lightness Adjustment
✅ **PASS** — Script adjusts lightness to achieve compliance while preserving hue and saturation

### Requirement 2.2: Hue and Saturation Preservation
✅ **PASS** — Adjusted token maintains hue (240°) and saturation (5%)

### Requirement 2.3: Background Testing
✅ **PASS** — Script tests tokens against all backgrounds defined in token usage map

### Requirement 2.4: Lc Documentation
⏳ **PENDING** — Inline comments will be added when script runs in non-dry-run mode

### Requirement 2.5: Body Text Threshold (Lc 75)
✅ **PASS** — Script targets Lc 75 for body text tokens

### Requirement 2.6: Large Text/UI Threshold (Lc 60)
✅ **PASS** — Script targets Lc 60 for large text and UI component tokens

---

## Next Steps

### Immediate Actions (Task 7.2)

1. **Resolve `--destructive-text` (dark mode) flag**:
   - Review component usage to determine actual use case
   - Decide on adjustment strategy (Options A-D above)
   - Update token usage map if reclassification is needed

2. **Review and approve `--muted-foreground` (dark mode) adjustment**:
   - Verify visual impact in Storybook
   - Confirm lightness change (+11.7%) is acceptable
   - Approve for production recalculation

### Subsequent Actions (Tasks 7.3+)

3. **Execute recalculation in production mode** (Task 7.3):
   - Run `pnpm run recalculate:tokens` (without `--dry-run` flag)
   - Verify tokens.css is updated with new values
   - Verify inline Lc comments are added

4. **Update visual regression baselines** (Task 7.4):
   - Run Chromatic visual regression tests
   - Review and accept diffs for affected stories
   - Update baselines

5. **Validate APCA compliance** (Task 7.5):
   - Run `pnpm run validate:apca`
   - Verify all tokens pass validation
   - Generate JSON report for documentation

---

## Technical Details

### Script Configuration

- **Input file**: `packages/tokens/src/tokens.css`
- **Output file**: `packages/tokens/src/tokens.css` (same as input)
- **Dry-run mode**: Enabled (`--dry-run` flag)
- **Lightness constraint**: ±15% (maximum adjustment allowed)

### Script Behavior

1. Parses `tokens.css` to extract all color tokens
2. Identifies foreground tokens and their backgrounds (from token usage map)
3. Calculates APCA Lc for each foreground-background pair
4. For tokens below threshold:
   - Uses binary search to find optimal lightness adjustment
   - Preserves hue and saturation
   - Verifies adjusted color meets threshold on all backgrounds
5. Generates report of changes and flagged tokens
6. In dry-run mode: does not modify files

### Algorithm Details

**Lightness Adjustment Algorithm**:
- Uses binary search with 0.1% precision
- Searches within range: `[original - 15%, original + 15%]`
- Finds lightness value closest to original that meets target Lc
- Returns null if target cannot be met within constraint

**Threshold Checking**:
- Absolute value of Lc is compared to threshold (polarity is preserved for documentation)
- Token must meet threshold on **all** backgrounds it appears on
- If token fails on any background, it is flagged for manual review

---

## Appendix: Full Script Output

```
=== APCA Token Recalculation ===
Input: src/tokens.css
Output: src/tokens.css
Dry run: true

Warning: Token "destructive-text" (dark) cannot meet Lc 75 on all backgrounds within ±15% lightness constraint. Manual review required.

=== Recalculation Report ===
Total foreground tokens: 24
Tokens changed: 1
Tokens flagged for manual review: 1

=== Changes ===
muted-foreground (dark):
  Before: 240 5% 71%
  After:  240 5% 82.7%
  Lc: 57.1 → 75.5 (on --muted)

=== Flagged Tokens ===
  - destructive-text (dark)

Dry run complete. No files were modified.
```

---

**Report prepared by**: Kiro (Spec Task Execution Agent)  
**Status**: ✅ Task 7.1 Complete — Dry-run executed successfully, findings documented
