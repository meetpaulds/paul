# Requirements Document

## Introduction

This document specifies the requirements for migrating the paul design system from WCAG 2.x relative luminance contrast ratios to APCA (Accessible Perceptual Contrast Algorithm) compliance. APCA is the contrast algorithm proposed for WCAG 3.0 and provides perceptually uniform contrast measurements using Lc (Lightness contrast) values instead of traditional ratios.

The migration involves recalculating all color tokens, updating audit methodology documentation, integrating APCA validation tooling, and documenting the shift from WCAG 2.2 (stable) to WCAG 3.0 (draft) standards.

## Glossary

- **APCA**: Accessible Perceptual Contrast Algorithm — a perceptually uniform contrast algorithm proposed for WCAG 3.0
- **Lc**: Lightness contrast value — APCA's contrast measurement unit, ranging from 0 to 108.3 (or -108.3 for polarity)
- **WCAG_2x_Calculator**: The existing relative luminance contrast calculator using the formula (L_lighter + 0.05) / (L_darker + 0.05)
- **APCA_Calculator**: The new APCA-based contrast calculator using the apca-w3 library
- **Color_Token**: A CSS custom property defining a color value in the design system (e.g., --muted-foreground)
- **Token_File**: The CSS file containing all color token definitions (packages/tokens/src/tokens.css)
- **Audit_Document**: The markdown file documenting contrast audit methodology (docs/compliance/contrast-audit.md)
- **Accessibility_Statement**: The markdown file declaring conformance status (docs/a11y-statement.md)
- **Design_System**: The paul Pattern, Asset & UI Library
- **Validation_Tool**: An automated tool that verifies APCA compliance of color tokens

## Requirements

### Requirement 1: APCA Calculation Library Integration

**User Story:** As a developer, I want to integrate the apca-w3 npm package, so that I can calculate APCA Lc values for color pairs.

#### Acceptance Criteria

1. THE Design_System SHALL include the apca-w3 package as a development dependency
2. THE APCA_Calculator SHALL accept RGB color values as input
3. WHEN valid RGB color pairs are provided, THE APCA_Calculator SHALL return Lc values between -108.3 and 108.3
4. THE APCA_Calculator SHALL preserve polarity information (positive for light-on-dark, negative for dark-on-light)

### Requirement 2: Color Token Recalculation

**User Story:** As a designer, I want all color tokens recalculated using APCA, so that the design system achieves perceptually uniform contrast.

#### Acceptance Criteria

1. WHEN a Color_Token fails to meet APCA minimum Lc thresholds, THE Design_System SHALL adjust the lightness value to achieve compliance
2. THE Design_System SHALL preserve hue and saturation values during recalculation
3. FOR ALL Color_Tokens, THE Design_System SHALL test against every background the token appears on in practice
4. THE Token_File SHALL document the APCA Lc value for each foreground-background pair in comments
5. WHEN recalculating tokens, THE Design_System SHALL target Lc 75 for body text (equivalent to WCAG 2.x AAA)
6. WHEN recalculating tokens, THE Design_System SHALL target Lc 60 for large text and UI components (equivalent to WCAG 2.x AA)

### Requirement 3: Audit Methodology Documentation Update

**User Story:** As an accessibility auditor, I want the audit methodology updated to reflect APCA, so that I can verify compliance using current standards.

#### Acceptance Criteria

1. THE Audit_Document SHALL replace all references to WCAG 2.x relative luminance formula with APCA formula
2. THE Audit_Document SHALL document the APCA Lc calculation methodology
3. THE Audit_Document SHALL specify minimum Lc thresholds for body text (Lc 75) and large text (Lc 60)
4. THE Audit_Document SHALL include a table showing before and after Lc values for all recalculated tokens
5. THE Audit_Document SHALL document the polarity convention (positive for light-on-dark, negative for dark-on-light)
6. THE Audit_Document SHALL reference the apca-w3 library as the calculation tool

### Requirement 4: WCAG 3.0 Draft Status Documentation

**User Story:** As a design system consumer, I want clear documentation about WCAG 3.0 draft status, so that I understand the stability and risk of adopting APCA.

#### Acceptance Criteria

1. THE Accessibility_Statement SHALL document that APCA targets WCAG 3.0 (draft) instead of WCAG 2.2 (stable)
2. THE Accessibility_Statement SHALL include a disclaimer that WCAG 3.0 is not yet a stable recommendation
3. THE Accessibility_Statement SHALL document the rationale for early adoption of APCA
4. THE Accessibility_Statement SHALL maintain backward compatibility information showing WCAG 2.2 equivalence where applicable
5. THE Accessibility_Statement SHALL update the conformance status table to include WCAG 3.0 (draft)

### Requirement 5: APCA Validation Tooling

**User Story:** As a developer, I want automated APCA validation tooling, so that I can verify contrast compliance during development and CI.

#### Acceptance Criteria

1. THE Validation_Tool SHALL read color tokens from the Token_File
2. WHEN the Validation_Tool executes, THE Validation_Tool SHALL calculate APCA Lc values for all foreground-background pairs
3. IF any Color_Token fails to meet minimum Lc thresholds, THEN THE Validation_Tool SHALL report the failing token and its Lc value
4. THE Validation_Tool SHALL output results in a machine-readable format (JSON)
5. THE Validation_Tool SHALL exit with a non-zero status code when validation fails
6. THE Design_System SHALL integrate the Validation_Tool into the CI pipeline

### Requirement 6: Token File Format Update

**User Story:** As a developer, I want the token file to document APCA values, so that I can understand the contrast rationale for each token.

#### Acceptance Criteria

1. THE Token_File SHALL include inline comments documenting APCA Lc values for each foreground token
2. THE Token_File SHALL document the background(s) each foreground token is tested against
3. THE Token_File SHALL use the format "/* Lc XX.X on --background-name */" for documentation
4. THE Token_File SHALL preserve the existing HSL channel convention for alpha composition

### Requirement 7: Visual Regression Testing Update

**User Story:** As a QA engineer, I want visual regression baselines updated, so that APCA-driven color changes are accepted as the new baseline.

#### Acceptance Criteria

1. WHEN color tokens are recalculated, THE Design_System SHALL update Chromatic visual regression baselines
2. THE Design_System SHALL document expected visual diffs in the Audit_Document
3. THE Design_System SHALL identify which components will show visual changes
4. WHEN visual regression tests run, THE Design_System SHALL pass with the new APCA-compliant tokens

### Requirement 8: Migration Documentation

**User Story:** As a design system consumer, I want migration documentation, so that I understand how APCA changes affect my implementation.

#### Acceptance Criteria

1. THE Design_System SHALL provide a migration guide documenting the shift from WCAG 2.x to APCA
2. THE migration guide SHALL document which tokens changed and by how much
3. THE migration guide SHALL provide visual comparison examples showing before and after states
4. THE migration guide SHALL document the perceptual impact of changes (e.g., "text becomes marginally darker")
5. THE migration guide SHALL include a FAQ section addressing common concerns about WCAG 3.0 draft status

### Requirement 9: APCA Parser and Printer

**User Story:** As a developer, I want to parse and format APCA Lc values, so that I can reliably convert between string representations and numeric values.

#### Acceptance Criteria

1. WHEN a valid Lc string is provided (e.g., "Lc 75.3"), THE APCA_Parser SHALL parse it into a numeric Lc value
2. WHEN an invalid Lc string is provided, THE APCA_Parser SHALL return a descriptive error
3. THE APCA_Printer SHALL format numeric Lc values into the standard string format "Lc XX.X"
4. FOR ALL valid Lc values, parsing then printing then parsing SHALL produce an equivalent value (round-trip property)

### Requirement 10: Backward Compatibility Mapping

**User Story:** As a design system consumer, I want to understand WCAG 2.x equivalence, so that I can communicate compliance to stakeholders familiar with traditional ratios.

#### Acceptance Criteria

1. THE Audit_Document SHALL include a mapping table showing APCA Lc values and their approximate WCAG 2.x ratio equivalents
2. THE Audit_Document SHALL document that Lc 75 approximates 7:1 (AAA) and Lc 60 approximates 4.5:1 (AA)
3. THE Audit_Document SHALL include a disclaimer that APCA and WCAG 2.x are not directly comparable due to different perceptual models
4. THE Accessibility_Statement SHALL maintain both WCAG 2.2 and WCAG 3.0 conformance claims during the transition period
