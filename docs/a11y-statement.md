# Accessibility Statement

> **Note for consumers of this library:**  
> This file serves as a **reusable template** and as a **completed example** for the paul Design System library itself.  
> Mandatory fields under the **European Accessibility Act (EAA)** and **EN 301 549 v3.2.1** are marked `[Required]`.

---

## [Required] Product Information

**Product:** paul — Pattern, Asset & UI Library  
**URL:** https://meetpaulds.github.io/paul  
**Publisher:** SirPauls, Graz, Austria  
**Date of last review:** 2026-05-11  
**Version:** 1.1.0

---

## [Required] Conformance Status


This Storybook documentation and its associated component libraries are **partially conformant** with the following standards:

| Standard | Version | Status |
|----------|---------|--------|
| **APCA (WCAG 3.0 draft)** | Working Draft | ✅ Fully conformant |
| **WCAG 2.2** | Level AAA (target) / Level AA (currently achieved) | ⚠️ Partially conformant |
| **EN 301 549** | v3.2.1 (2021-03) | ⚠️ Partially conformant |
| **European Accessibility Act (EAA)** | Directive 2019/882 | ⚠️ In progress |

### APCA (WCAG 3.0 Draft) Compliance

paul uses the **Accessible Perceptual Contrast Algorithm (APCA)** from the WCAG 3.0 working draft for color contrast validation. APCA provides more accurate perceptual contrast measurements than WCAG 2.x relative luminance ratios.

**APCA Thresholds**:
- **Body text**: Lc 75 (≈ WCAG 2.x 7:1 / AAA)
- **Large text & UI components**: Lc 60 (≈ WCAG 2.x 4.5:1 / AA)

**Validation Status**: 34/34 checks passing (100%)

> **Important**: WCAG 3.0 is currently a **working draft** and not yet a stable W3C recommendation. paul maintains backward compatibility with WCAG 2.2 Level AAA standards during this transition period. The APCA implementation is forward-looking and prepares paul for future accessibility standards.

**Rationale for Early Adoption**:
1. **Scientific accuracy** - APCA is based on modern vision science research
2. **Better user experience** - More accurate contrast for users with low vision
3. **Future-proof** - Ready for WCAG 3.0 when it becomes stable

**Backward Compatibility**: All tokens that meet APCA Lc 75 also meet or exceed WCAG 2.2 Level AAA (7:1 ratio). paul maintains dual compliance during the transition period.

> **Status definitions:**  
> - **Fully conformant** – No known deviations from the stated standards.  
> - **Partially conformant** – Some content or components do not yet fully meet the requirements (see "Non-conformant Areas" below).  
> - **Non-conformant** – The product does not substantially meet the requirements.

---

## [Required] Non-conformant Areas

The following areas do not yet fully meet the requirements. We are actively working to address them.

### 1. Chart — Use of Colour (WCAG 1.4.1 / EN 301 549 §9.1.4.1)

**Affected components:** `ChartContainer`, `ChartTooltip`  
**Description:** Datasets are differentiated by colour alone, without supplementary patterns or symbols. A `ChartDataTable` component is now available as a text alternative (added v1.1.0), but colour-only differentiation within the chart itself remains.  
**Reason for deviation:** Dependency on the Recharts library; pattern/symbol API is under development.  
**Remediation timeline:** v1.2.0 (planned Q3 2026)

### 2. Form — Error Prevention All (WCAG 3.3.6 / EN 301 549 §9.3.3.6) — AAA

**Affected components:** `Form`  
**Description:** A form review step or confirmation dialog for critical form submissions is not yet available as a built-in pattern.  
**Remediation timeline:** v1.2.0 — a form review pattern is planned.

---

## [Required] Contact and Feedback Mechanism


If you encounter barriers in our Storybook documentation or component libraries, please get in touch:

**Email:** [paul@sirpauls.com](mailto:paul@sirpauls.com)  
**GitHub Issues:** [https://github.com/meetpaulds/paul/issues](https://github.com/meetpaulds/paul/issues) *(label: `accessibility`)*  
**GitHub Discussions:** [https://github.com/meetpaulds/paul/discussions](https://github.com/meetpaulds/paul/discussions)

We aim to respond to enquiries within **5 working days**.  
For urgent accessibility issues that substantially impair usability, we aim to respond within **2 working days**.


---

## [Required] Enforcement Procedure (EAA-compliant)


If you are not satisfied with how your report has been handled, you may contact the relevant national supervisory authority:

**Austria:**  
Federal Ministry for Digital and Economic Affairs (BMDW) / Monitoring Body  
Web: [https://www.digitales.oesterreich.gv.at](https://www.digitales.oesterreich.gv.at)

**Germany:**  
Federal Supervisory Body for Accessible Information Technology (BFIT-Bund)  
Web: [https://www.bfit-bund.de](https://www.bfit-bund.de)

**EU-wide:**  
Further contact points under EAA Article 13(5) can be found at:  
[https://ec.europa.eu/social/eaa](https://ec.europa.eu/social/eaa)


---

## [Required] Technical Information


This Accessibility Statement covers the following technologies used to render content:

- **HTML5**, **CSS**, **JavaScript / TypeScript**
- **React 19**, **Vue 3**, **Svelte 5**, **Angular 18**
- **Radix UI** (React), **Radix Vue** (Vue), **Melt UI** (Svelte), **Angular CDK** (Angular)
- **Tailwind CSS v4**

The accessibility of this library has been assessed using the following tools:

| Tool | Purpose |
|------|---------|
| axe-core (via `@storybook/addon-a11y`) | Automated WCAG checks in Storybook |
| axe-playwright | CI regression tests for all 56 components |
| Keyboard navigation | Manual review of all interactive components |

> **Note:** Manual screen reader testing (NVDA, VoiceOver) and Windows High Contrast Mode verification are planned for v1.1.0. Current assessment is based on automated tooling and keyboard navigation review.

---

## [Required] Scope


**Covered by this statement:**
- All 60 components in the `@meetpaul/ui` (React), `@meetpaul/ui-vue`, `@meetpaul/ui-svelte`, and `@meetpaul/ui-angular` packages at version 1.1.0
- The Storybook documentation at [https://meetpaulds.github.io/paul](https://meetpaulds.github.io/paul)

**Not covered (explicitly excluded):**
- Content and implementations created by consumers of this library within their own products
- Third-party libraries whose accessibility is not directly controlled by this library (e.g. Recharts, Embla Carousel)

---

## Date of This Statement


This statement was last reviewed and updated on **11 May 2026**.  
It is updated at least **once a year** and at every major or minor release.

---

## Template Notes for Consumers

> The section below is intended solely for teams using this template for their own product. It may be removed from the published version.

**Pre-publication checklist:**

- [ ] Conformance status updated to reflect your own assessment findings
- [ ] All non-conformant areas fully listed
- [ ] A named human point of contact provided
- [ ] National enforcement authority entered
- [ ] Technologies and testing tools updated
- [ ] Date of last review entered
- [ ] Statement linked prominently (footer, legal notice, main navigation)
- [ ] Process for regular updates defined

**Legal notice:**  
This template does not constitute legal advice. For a binding conformance assessment and a legally sound statement, we recommend working with a certified accessibility auditor (e.g. IAAP CPACC, TÜV Rheinland, Access42).

---

*Based on EN 301 549 v3.2.1 · EAA Directive 2019/882 · WCAG 2.2*  
*Template provided by [paul — Pattern, Asset & UI Library](https://github.com/meetpaulds/paul) · MIT Licence*
