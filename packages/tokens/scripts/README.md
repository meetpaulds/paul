# APCA Token Scripts

This directory contains scripts for APCA (Accessible Perceptual Contrast Algorithm) validation and token recalculation.

## Scripts

### `validate-apca.ts`

Validates all color tokens in `tokens.css` against APCA thresholds.

**Usage:**

```bash
# Run validation
pnpm run validate:apca

# Output JSON report
pnpm run validate:apca --json=./apca-report.json
```

**Exit Codes:**
- `0` - All checks passed
- `1` - One or more checks failed

**Thresholds:**
- **Body text** (Lc 75): `foreground`, `card-foreground`, `popover-foreground`, `destructive-text`
- **Large text / UI components** (Lc 60): All other foreground tokens

**Output Format:**

Console output shows:
- Total checks performed
- Number of failed checks
- Pass/fail status
- Detailed failure information for each non-compliant token

JSON output includes:
```json
{
  "passed": false,
  "totalChecks": 34,
  "failedChecks": 3,
  "failures": [
    {
      "tokenName": "muted-foreground",
      "mode": "dark",
      "foreground": { "h": 240, "s": 5, "l": 71 },
      "background": "muted",
      "backgroundHSL": { "h": 240, "s": 3.7, "l": 15.9 },
      "lcValue": -57.12,
      "threshold": 60,
      "useCase": "large-text"
    }
  ]
}
```

### `recalculate-tokens.ts`

Recalculates color tokens to meet APCA thresholds (implementation pending).

**Usage:**

```bash
# Dry run (preview changes without writing)
pnpm run recalculate:tokens:dry-run

# Apply changes
pnpm run recalculate:tokens
```

## Modules

### `apca-calculator.ts`

Wrapper around the `apca-w3` library providing type-safe APCA calculations.

**Functions:**
- `calculateLc(foreground: RGB, background: RGB): number` - Calculate APCA Lc value
- `hslToRgb(hsl: HSL): RGB` - Convert HSL to RGB
- `rgbToHsl(rgb: RGB): HSL` - Convert RGB to HSL
- `meetsThreshold(lc: number, useCase: UseCase): boolean` - Check if Lc meets threshold

### `token-usage-map.ts`

Defines which foreground tokens appear on which backgrounds and provides token parsing utilities.

**Functions:**
- `parseTokensFile(tokensPath: string): ParsedToken[]` - Parse tokens.css
- `getForegroundTokens(tokens: ParsedToken[]): ParsedToken[]` - Get foreground tokens
- `getBackgroundTokens(tokens: ParsedToken[]): ParsedToken[]` - Get background tokens
- `getBackgroundsForForeground(name: string, tokens: ParsedToken[], mode: 'light' | 'dark'): ParsedToken[]` - Get backgrounds for a foreground

**Token Usage Map:**
```typescript
{
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
}
```

## Testing

Run tests for the validation tool:

```bash
pnpm test validate-apca.test.ts
```

## CI Integration

Add to `.github/workflows/ci.yml`:

```yaml
- name: Validate APCA Compliance
  run: pnpm run validate:apca
  working-directory: packages/tokens
```

## References

- [APCA Contrast Calculator](https://apcacontrast.com/)
- [apca-w3 npm package](https://www.npmjs.com/package/apca-w3)
- [WCAG 3.0 Working Draft](https://www.w3.org/TR/wcag-3.0/)
- [APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell)
