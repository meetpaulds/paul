# Implementation Plan: APCA Migration

## Overview

This implementation plan converts the paul design system from WCAG 2.x relative luminance contrast ratios to APCA (Accessible Perceptual Contrast Algorithm) compliance. The implementation involves integrating the `apca-w3` npm package, creating calculation and validation tooling, recalculating color tokens to meet APCA Lc thresholds, and updating all documentation to reflect WCAG 3.0 (draft) standards.

## Tasks

- [x] 1. Set up APCA infrastructure and core modules
  - [x] 1.1 Install apca-w3 package and create APCA Calculator module
    - Install `apca-w3` as a development dependency in `packages/tokens/package.json`
    - Create `packages/tokens/scripts/apca-calculator.ts` with the APCACalculator interface
    - Implement `calculateLc()`, `hslToRgb()`, `rgbToHsl()`, and `meetsThreshold()` functions
    - Add RGB and HSL type definitions
    - Validate RGB values are in range 0-255 before calling apca-w3
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [ ]* 1.2 Write property test for APCA Lc value range
    - **Property 1: APCA Lc Values Within Valid Range**
    - **Validates: Requirements 1.3**
    - Use fast-check to generate random RGB color pairs
    - Assert that `|calculateLc(fg, bg)| <= 108.3` for all generated pairs
    - Configure minimum 100 iterations
    - _Requirements: 1.3_

  - [ ]* 1.3 Write property test for APCA polarity preservation
    - **Property 2: APCA Polarity Preservation**
    - **Validates: Requirements 1.4**
    - Use fast-check to generate random RGB color pairs
    - Calculate relative luminance for foreground and background
    - Assert polarity matches relative luminance comparison
    - _Requirements: 1.4_

  - [ ]* 1.4 Write unit tests for APCA Calculator edge cases
    - Test identical colors produce Lc ≈ 0
    - Test pure black on pure white produces maximum Lc
    - Test known color pairs against reference values from APCA documentation
    - Test HSL/RGB conversion for pure black, pure white, pure red, and grayscale
    - _Requirements: 1.2, 1.3_

- [x] 2. Implement APCA Parser and Printer
  - [x] 2.1 Create APCA Parser and Printer module
    - Create `packages/tokens/scripts/apca-parser.ts`
    - Implement `parse()` function to parse "Lc XX.X" strings into numeric values
    - Implement `print()` function to format numeric Lc values into "Lc XX.X" strings
    - Add validation for Lc range (-108.3 to 108.3)
    - Add descriptive error messages for invalid input
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ]* 2.2 Write property test for parser/printer round-trip
    - **Property 4: APCA Parser and Printer Round-Trip**
    - **Validates: Requirements 9.4**
    - Use fast-check to generate random Lc values in range -108.3 to 108.3
    - Assert `Math.abs(parse(print(lc)) - lc) < 0.1` for all generated values
    - _Requirements: 9.4_

  - [ ]* 2.3 Write property test for parser error handling
    - **Property 5: APCA Parser Error Handling**
    - **Validates: Requirements 9.2**
    - Use fast-check to generate invalid Lc strings (wrong format, out of range)
    - Assert parser throws error containing the invalid input
    - _Requirements: 9.2_

  - [ ]* 2.4 Write unit tests for parser and printer specific examples
    - Test parsing "Lc 75.3" → 75.3
    - Test parsing "Lc -60.2" → -60.2
    - Test parsing "Lc 0" → 0
    - Test printing 75.3 → "Lc 75.3"
    - Test printing -60.2 → "Lc -60.2"
    - Test printing 0 → "Lc 0.0"
    - _Requirements: 9.1, 9.3_

- [x] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Implement Token Recalculation Script
  - [x] 4.1 Create token usage map and parsing utilities
    - Create `packages/tokens/scripts/token-usage-map.ts` with TOKEN_USAGE_MAP constant
    - Define which foreground tokens appear on which backgrounds
    - Create utilities to parse `tokens.css` and extract HSL color values
    - Add regex validation for HSL format
    - _Requirements: 2.3, 6.2_

  - [x] 4.2 Implement lightness adjustment algorithm
    - Create `adjustLightness()` function in `packages/tokens/scripts/recalculate-tokens.ts`
    - Implement binary search to find lightness value that meets target Lc
    - Preserve hue and saturation during adjustment
    - Add constraint check for ±15% lightness adjustment limit
    - Log warnings for tokens that cannot meet threshold within constraint
    - _Requirements: 2.1, 2.2_

  - [ ]* 4.3 Write property test for hue and saturation preservation
    - **Property 3: Hue and Saturation Preservation During Lightness Adjustment**
    - **Validates: Requirements 2.2**
    - Use fast-check to generate random HSL colors and target Lc values
    - Assert `adjustLightness(hsl, bg, targetLc).h === hsl.h && adjustLightness(hsl, bg, targetLc).s === hsl.s`
    - _Requirements: 2.2_

  - [x] 4.4 Implement token recalculation script
    - Create `recalculateTokens()` function in `packages/tokens/scripts/recalculate-tokens.ts`
    - Parse `tokens.css` to extract all color tokens
    - For each foreground token, calculate Lc for all backgrounds from usage map
    - If Lc < threshold, adjust lightness to meet target (Lc 75 for body text, Lc 60 for large text)
    - Generate inline comments documenting Lc values in format "/* Lc XX.X on --background-name */"
    - Write updated tokens to output file
    - Support dry-run mode that reports changes without writing
    - _Requirements: 2.1, 2.3, 2.4, 2.5, 2.6, 6.1, 6.3_

  - [ ]* 4.5 Write integration tests for token recalculation
    - Test script reads tokens.css and produces valid output
    - Test recalculated tokens meet APCA thresholds
    - Test hue and saturation are preserved
    - Test inline comments are added with Lc values
    - Test dry-run mode does not modify files
    - _Requirements: 2.1, 2.2, 2.4, 6.1_

- [x] 5. Implement APCA Validation Tool
  - [x] 5.1 Create APCA validation tool
    - Create `packages/tokens/scripts/validate-apca.ts` with APCAValidator interface
    - Implement `validate()` function to read tokens.css and calculate Lc for all foreground-background pairs
    - Implement `outputJSON()` function to write validation results in JSON format
    - Check each token against appropriate threshold (Lc 75 for body text, Lc 60 for large text)
    - Report failures with token name, mode, Lc value, threshold, and use case
    - Exit with code 0 for pass, code 1 for fail
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 5.2 Write integration tests for APCA validation tool
    - Test validation tool reads tokens.css and produces JSON report
    - Test compliant tokens pass validation
    - Test non-compliant tokens fail validation with correct error details
    - Test exit code is 0 for pass, 1 for fail
    - _Requirements: 5.2, 5.3, 5.4, 5.5_

  - [x] 5.3 Add validation scripts to package.json
    - Add `validate:apca` script to run validation tool
    - Add `validate:apca:json` script to output JSON report
    - _Requirements: 5.1, 5.4_

- [x] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Execute token recalculation
  - [x] 7.1 Run token recalculation in dry-run mode
    - Execute recalculation script with dry-run flag
    - Review generated report of token changes
    - Identify tokens flagged for manual review
    - Document expected visual changes
    - _Requirements: 2.1, 2.3_

  - [ ] 7.2 Execute token recalculation and update token files
    - Run recalculation script to update `packages/tokens/src/tokens.css`
    - Update `packages/tokens/src/tokens.ts` if needed
    - Verify all tokens meet APCA thresholds using validation tool
    - Commit updated token files
    - _Requirements: 2.1, 2.4, 2.5, 2.6, 6.1, 6.3, 6.4_

- [ ] 8. Integrate APCA validation into CI pipeline
  - [~] 8.1 Add APCA validation to CI workflow
    - Update `.github/workflows/ci.yml` to run `pnpm run validate:apca`
    - Ensure CI fails when validation fails
    - Add JSON report as CI artifact
    - _Requirements: 5.6_

  - [ ]* 8.2 Write integration test for CI validation
    - Test validation tool runs in CI pipeline
    - Test CI fails when validation fails
    - Test JSON report is generated as artifact
    - _Requirements: 5.6_

- [ ] 9. Update audit methodology documentation
  - [~] 9.1 Update contrast-audit.md with APCA methodology
    - Replace all references to WCAG 2.x relative luminance formula with APCA formula
    - Document APCA Lc calculation methodology
    - Specify minimum Lc thresholds (Lc 75 for body text, Lc 60 for large text)
    - Document polarity convention (positive for light-on-dark, negative for dark-on-light)
    - Reference apca-w3 library as the calculation tool
    - _Requirements: 3.1, 3.2, 3.3, 3.5, 3.6_

  - [~] 9.2 Add before/after Lc values table to audit documentation
    - Create table showing token name, mode, before Lc, after Lc, and background
    - Include all recalculated tokens
    - Document expected visual diffs
    - _Requirements: 3.4_

  - [~] 9.3 Add WCAG 2.x equivalence mapping table
    - Create table mapping APCA Lc values to approximate WCAG 2.x ratios
    - Document Lc 75 ≈ 7:1 (AAA) and Lc 60 ≈ 4.5:1 (AA)
    - Include disclaimer that APCA and WCAG 2.x are not directly comparable
    - _Requirements: 10.1, 10.2, 10.3_

- [ ] 10. Update accessibility statement
  - [~] 10.1 Update a11y-statement.md with WCAG 3.0 draft status
    - Document that APCA targets WCAG 3.0 (draft) instead of WCAG 2.2 (stable)
    - Include disclaimer that WCAG 3.0 is not yet a stable recommendation
    - Document rationale for early adoption of APCA
    - Update conformance status table to include WCAG 3.0 (draft)
    - _Requirements: 4.1, 4.2, 4.3, 4.5_

  - [~] 10.2 Add backward compatibility information
    - Maintain WCAG 2.2 equivalence information where applicable
    - Document both WCAG 2.2 and WCAG 3.0 conformance claims during transition period
    - _Requirements: 4.4, 10.4_

- [ ] 11. Create migration guide
  - [~] 11.1 Create APCA migration guide document
    - Create `docs/migration/apca-migration.md`
    - Document the shift from WCAG 2.x to APCA
    - List all tokens that changed with before/after values
    - Provide visual comparison examples showing before and after states
    - Document perceptual impact of changes (e.g., "text becomes marginally darker")
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [~] 11.2 Add FAQ section to migration guide
    - Address common concerns about WCAG 3.0 draft status
    - Explain why the design system is adopting APCA early
    - Clarify relationship between APCA and WCAG 2.x
    - Document stability timeline and transition plan
    - _Requirements: 8.5_

- [ ] 12. Update visual regression baselines
  - [~] 12.1 Run Chromatic visual regression tests
    - Execute Chromatic tests after token recalculation
    - Review visual diffs for all stories
    - Identify components with visual changes
    - _Requirements: 7.1, 7.3_

  - [~] 12.2 Accept visual diffs and update baselines
    - Accept diffs as new baseline for tokens with changed lightness
    - Document expected diffs in audit documentation
    - Verify no layout or structural changes occurred
    - Update Chromatic baselines
    - _Requirements: 7.2, 7.4_

- [ ] 13. Update README and all compliance statements
  - [ ] 13.1 Update README.md with APCA/WCAG 3.0 compliance
    - Update the "Accessibility" section to state APCA (WCAG 3.0 draft) compliance
    - Replace references to "WCAG 2.2 Level AAA" with "APCA (WCAG 3.0 draft)"
    - Add note about WCAG 3.0 draft status and backward compatibility with WCAG 2.2
    - Update any contrast-related claims to reference APCA Lc values instead of ratios
    - _Requirements: 4.1, 4.2_

  - [ ] 13.2 Update CHANGELOG.md with APCA migration entry
    - Add new version entry documenting the APCA migration
    - List all changed tokens with before/after Lc values
    - Mark as a breaking change if visual differences are significant
    - Reference the migration guide for consumers
    - _Requirements: 8.1, 8.2_

  - [ ] 13.3 Update CONTRIBUTING.md with APCA validation requirements
    - Add section on running APCA validation before submitting PRs
    - Document the `pnpm validate:apca` command
    - Explain APCA Lc thresholds (Lc 75 for body text, Lc 60 for large text)
    - _Requirements: 5.1_

  - [ ] 13.4 Search and update all remaining WCAG 2.x references
    - Search codebase for "WCAG 2.2", "7:1", "4.5:1", "contrast ratio"
    - Update to APCA terminology where appropriate
    - Preserve WCAG 2.x references only in backward compatibility sections
    - Update component documentation comments if they reference contrast ratios
    - _Requirements: 4.1, 10.4_

- [ ] 14. Final checkpoint - Ensure all tests pass and documentation is complete
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties defined in the design document
- Unit tests validate specific examples and edge cases
- Integration tests verify file I/O and CI integration
- The design document uses TypeScript, so all implementation will use TypeScript
- APCA Lc thresholds: Lc 75 for body text (≈ WCAG AAA), Lc 60 for large text and UI components (≈ WCAG AA)
- Lightness adjustments are constrained to ±15% to preserve visual identity
- Tokens that cannot meet threshold within constraint are flagged for manual review

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4", "2.2", "2.3", "2.4"] },
    { "id": 2, "tasks": ["4.1"] },
    { "id": 3, "tasks": ["4.2"] },
    { "id": 4, "tasks": ["4.3", "4.4", "5.1"] },
    { "id": 5, "tasks": ["4.5", "5.2", "5.3"] },
    { "id": 6, "tasks": ["7.1"] },
    { "id": 7, "tasks": ["7.2"] },
    { "id": 8, "tasks": ["8.1", "9.1", "10.1", "11.1"] },
    { "id": 9, "tasks": ["8.2", "9.2", "9.3", "10.2", "11.2", "12.1"] },
    { "id": 10, "tasks": ["12.2", "13.1", "13.2", "13.3", "13.4"] }
  ]
}
```
