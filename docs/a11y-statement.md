# Accessibility Statement

> **Note for consumers of this library:**  
> This file serves as a **reusable template** and as a **completed example** for the paul Design System library itself.  
> Sections marked with `<!-- PLACEHOLDER: … -->` must be updated when integrating this template into your own product.  
> Mandatory fields under the **European Accessibility Act (EAA)** and **EN 301 549 v3.2.1** are marked `[Required]`.

---

## [Required] Product Information

<!-- PLACEHOLDER: Name of your product / website -->
**Product:** paul — Pattern, Asset & UI Library  
<!-- PLACEHOLDER: URL of your product -->
**URL:** https://meetpaulds.github.io/paul  
<!-- PLACEHOLDER: Name of your organisation -->
**Publisher:** SirPauls, Graz, Austria  
<!-- PLACEHOLDER: Date of last review in YYYY-MM-DD format -->
**Date of last review:** 2026-04-24  
<!-- PLACEHOLDER: Version of the product -->
**Version:** 1.0.2

---

## [Required] Conformance Status

<!-- PLACEHOLDER: Choose one of the statuses below and adapt it to your findings. -->

This Storybook documentation and its associated component libraries are **partially conformant** with the following standards:

| Standard | Version | Status |
|----------|---------|--------|
| **WCAG 2.2** | Level AAA (target) / Level AA (currently achieved) | ⚠️ Partially conformant |
| **EN 301 549** | v3.2.1 (2021-03) | ⚠️ Partially conformant |
| **European Accessibility Act (EAA)** | Directive 2019/882 | ⚠️ In progress |

> **Status definitions:**  
> - **Fully conformant** – No known deviations from the stated standards.  
> - **Partially conformant** – Some content or components do not yet fully meet the requirements (see "Non-conformant Areas" below).  
> - **Non-conformant** – The product does not substantially meet the requirements.

---

## [Required] Non-conformant Areas

<!-- PLACEHOLDER: List all known non-conformities. Each entry must include: the affected element, the violated clause, a justification, and a remediation timeline. -->

The following areas do not yet fully meet the requirements. We are actively working to address them.

### 1. Target Size (WCAG 2.5.5 / EN 301 549 §9.2.5.5) — AAA

**Affected components:** `Slider` (thumb), `Pagination` (buttons), `Calendar` / `DatePicker` (day cells)  
**Description:** Interactive elements within these components fall below the recommended minimum of 44×44 pixels required for AAA conformance. WCAG 2.5.8 (AA) at 24×24 px is met.  
**Reason for deviation:** Visual design constraints of the current design system; redesign is under way.  
**Remediation timeline:** v1.1.0 (planned Q3 2026)

### 2. Chart — Text Alternative & Use of Colour (WCAG 1.1.1, 1.4.1 / EN 301 549 §9.1.1.1, §9.1.4.1)

**Affected components:** `ChartContainer`, `ChartTooltip`  
**Description:** Charts currently have no programmatically accessible text alternative (e.g. a data table). Datasets are differentiated by colour alone, without supplementary patterns or symbols.  
**Reason for deviation:** Dependency on the Recharts library; alternative text API is under development.  
**Remediation timeline:** v1.1.0 (planned Q3 2026)

### 3. NavigationMenu / Sidebar — Skip Link (WCAG 2.4.1 / EN 301 549 §9.2.4.1)

**Affected components:** `NavigationMenu`, `Sidebar`  
**Description:** A skip link component that allows users to bypass repeated navigation blocks is not currently included in the library.  
**Reason for deviation:** Architectural decision; skip links are page-specific and must be implemented by consumers of the library.  
**Remediation timeline:** v1.1.0 — a `SkipLink` component will be provided as a standalone component.

### 4. Field / Form — Context-sensitive Help (WCAG 3.3.5 / EN 301 549 §9.3.3.5) — AAA

**Affected components:** `Field`, `Form`  
**Description:** Context-sensitive help (e.g. linked explanations on form fields) is not yet supported as a built-in component feature.  
**Remediation timeline:** v1.1.0 — `Field.Help` sub-component planned.

### 5. Typography — Visual Presentation (WCAG 1.4.8 / EN 301 549 §9.1.4.8) — AAA

**Affected components:** `Typography`  
**Description:** Body text blocks exceed the recommended line width of 80 characters in certain viewports. Customisation of line spacing, letter spacing, and font size by consumers is not yet fully exposed via props.  
**Remediation timeline:** v1.1.0 — a `prose` variant with WCAG-conformant defaults is planned.

---

## [Required] Contact and Feedback Mechanism

<!-- PLACEHOLDER: Provide a concrete contact method. An automated redirect alone is insufficient — a human point of contact must be reachable (EAA requirement). -->

If you encounter barriers in our Storybook documentation or component libraries, please get in touch:

**Email:** [office@sirpauls.com](mailto:office@sirpauls.com)  
**GitHub Issues:** [https://github.com/meetpaulds/paul/issues](https://github.com/meetpaulds/paul/issues) *(label: `accessibility`)*  
**GitHub Discussions:** [https://github.com/meetpaulds/paul/discussions](https://github.com/meetpaulds/paul/discussions)

We aim to respond to enquiries within **5 working days**.  
For urgent accessibility issues that substantially impair usability, we aim to respond within **2 working days**.

<!-- PLACEHOLDER: If your product has a support chat, ticketing system, or telephone number, add those details here. -->

---

## [Required] Enforcement Procedure (EAA-compliant)

<!-- PLACEHOLDER: Adapt this section to the competent authority in your EU member state. -->

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

<!-- PLACEHOLDER: Add the competent authority for your country if not Austria or Germany. -->

---

## [Required] Technical Information

<!-- PLACEHOLDER: Adapt the technologies listed to match your own product. -->

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
| NVDA + Firefox | Manual screen reader testing (Windows) |
| VoiceOver + Safari | Manual screen reader testing (macOS / iOS) |
| Keyboard navigation | Manual review of all interactive components |
| Windows High Contrast Mode | Forced colours support verification |

<!-- PLACEHOLDER: If you have not conducted manual testing, remove the relevant rows and document this transparently. -->

---

## [Required] Scope

<!-- PLACEHOLDER: Define which parts of your product are covered by this statement and which are explicitly excluded. -->

**Covered by this statement:**
- All 56 components in the `@meetpaul/ui` (React), `@meetpaul/ui-vue`, `@meetpaul/ui-svelte`, and `@meetpaul/ui-angular` packages at version 1.0.2
- The Storybook documentation at [https://meetpaulds.github.io/paul](https://meetpaulds.github.io/paul)

**Not covered (explicitly excluded):**
- Content and implementations created by consumers of this library within their own products
- Third-party libraries whose accessibility is not directly controlled by this library (e.g. Recharts, Embla Carousel)

---

## Date of This Statement

<!-- PLACEHOLDER: Update this date on every material review or change. -->

This statement was last reviewed and updated on **24 April 2026**.  
It is updated at least **once a year** and at every major or minor release.

---

## Template Notes for Consumers

> The section below is intended solely for teams using this template for their own product. It may be removed from the published version.

**Pre-publication checklist:**

- [ ] All `<!-- PLACEHOLDER: … -->` comments replaced
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
