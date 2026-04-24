# EN 301 549 v3.2.1 — Compliance Matrix

> **Version:** 1.0.2  
> **Last updated:** 2026-04-24  
> **Scope:** `@meetpaul/ui` · `@meetpaul/ui-vue` · `@meetpaul/ui-svelte` · `@meetpaul/ui-angular`  
> **Standard:** EN 301 549 v3.2.1 (2021-03) → ETSI, applicable under the European Accessibility Act (EAA) from 28 June 2025  
>
> **Legend:**  
> ✅ Conformant — no action required  
> ⚠️ Partially conformant — remediation planned  
> ❌ Non-conformant / not yet assessed — action required  
>
> **Standard clause reference (EN 301 549):**  
> - **9.x** = Web requirements (equivalent to WCAG 2.1 / 2.2)  
> - **11.x** = Non-web software  
> - **5.x** = Generic requirements (Closed Functionality, Two-way voice, etc.)  
>
> This document is updated manually or via CI on every release tag.

---

## Table of Contents

1. [Disclosure](#disclosure)
2. [Feedback](#feedback)
3. [Forms](#forms)
4. [Navigation](#navigation)
5. [Overlays](#overlays)
6. [Layout](#layout)
7. [Data Display](#data-display)
8. [Media](#media)
9. [Utilities](#utilities)

---

## Disclosure

### Accordion

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ✅ | — |
| 9.2.4.3 Focus Order | 2.4.3 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.4.13 Focus Not Obscured (AAA) | 2.4.13 | ⚠️ | Verify trigger is not obscured by sticky headers |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-expanded` correctly set |

### Collapsible

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ⚠️ | Verify `aria-expanded` in Svelte/Angular implementations |

---

## Feedback

### Alert

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="alert"` set |
| 9.1.4.1 Use of Colour | 1.4.1 | ✅ | Icon + text used; colour is not the sole indicator |
| 9.1.4.3 Contrast (Minimum) | 1.4.3 | ✅ | 4.5:1 verified |
| 9.1.4.6 Contrast (Enhanced) (AAA) | 1.4.6 | ⚠️ | Verify 7:1 ratio for `muted-foreground` token |
| 9.4.1.3 Status Messages | 4.1.3 | ✅ | — |

### AlertDialog

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ✅ | Focus trap implemented |
| 9.2.4.3 Focus Order | 2.4.3 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.4.13 Focus Not Obscured (AAA) | 2.4.13 | ✅ | Modal renders above all other content |
| 9.3.2.2 On Input | 3.2.2 | ✅ | No automatic action without user confirmation |
| 9.3.3.4 Error Prevention | 3.3.4 | ✅ | Cancel button present |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `role="alertdialog"`, `aria-modal` |

### Badge

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.4.1 Use of Colour | 1.4.1 | ✅ | Informational only; colour is not the sole indicator |
| 9.1.4.3 Contrast (Minimum) | 1.4.3 | ✅ | — |
| 9.1.4.6 Contrast (Enhanced) (AAA) | 1.4.6 | ⚠️ | Verify 7:1 ratio for `destructive` variant |

### Skeleton

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ⚠️ | Add `aria-busy="true"` + `aria-label="Loading..."` |
| 9.4.1.3 Status Messages | 4.1.3 | ⚠️ | Verify live region communicates loading state |

### Spinner

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ⚠️ | Add `role="status"` + descriptive `aria-label` |
| 9.4.1.3 Status Messages | 4.1.3 | ⚠️ | Add `aria-live="polite"` |

### Toast / Sonner

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.2.1 Timing Adjustable | 2.2.1 | ⚠️ | Allow auto-dismiss timeout to be paused on hover/focus |
| 9.2.2.2 Pause, Stop, Hide | 2.2.2 | ⚠️ | Dismiss button must remain reachable at all times |
| 9.4.1.3 Status Messages | 4.1.3 | ✅ | `role="status"` / `aria-live` set |

### Progress

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="progressbar"` |
| 9.1.4.1 Use of Colour | 1.4.1 | ✅ | Percentage value available as text |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |

---

## Forms

### Button

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | `focus-visible:ring-2` |
| 9.2.5.3 Label in Name | 2.5.3 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | `icon` size → `h-11 w-11` (44 px); `default`/`sm`/`lg` are labelled text buttons (inline exemption applies) |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### ButtonGroup

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ⚠️ | Add `role="group"` + descriptive `aria-label` to group wrapper |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | All size variants bumped to `h-11` (44 px) minimum |

### Checkbox

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | `h-6 w-6` = 24 px; label click extends hit area to ≥ 44 px |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `role="checkbox"`, `aria-checked` |

### Input

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.1.3.5 Identify Input Purpose | 1.3.5 | ⚠️ | Add `autocomplete` attribute to Storybook examples |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.3.3.1 Error Identification | 3.3.1 | ⚠️ | Ensure `aria-invalid` + `aria-errormessage` are wired via the `Field` wrapper |
| 9.3.3.2 Labels or Instructions | 3.3.2 | ⚠️ | Always use with `Label` component; document that placeholder ≠ label |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### InputGroup

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ⚠️ | Mark prefix/suffix elements as `aria-hidden` or link via `aria-describedby` |
| 9.3.3.2 Labels or Instructions | 3.3.2 | ⚠️ | Ensure label association is maintained with the input |

### InputOTP

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.1.3.5 Identify Input Purpose | 1.3.5 | ✅ | `autocomplete="one-time-code"` set |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Tab navigation between slots |
| 9.3.3.8 Accessible Authentication (AAA) | 3.3.8 | ✅ | OTP provides a cognitively accessible authentication alternative |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-label="One-time password"` |

### Label

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.3.3.2 Labels or Instructions | 3.3.2 | ✅ | — |

### RadioGroup / RadioGroupItem

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="radiogroup"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow key navigation |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | `h-6 w-6` = 24 px; label extends click target |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `role="radio"`, `aria-checked` |

### Select

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.3.2.2 On Input | 3.2.2 | ✅ | No automatic selection on open |
| 9.3.2.5 Change on Request (AAA) | 3.2.5 | ⚠️ | Verify Angular native select: no `onChange` auto-submit |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### Slider

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="slider"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow keys + Home/End |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | Transparent `before:inset-[-14px]` pseudo-element expands hit area to 44×44 px; visual size unchanged |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label` |

### Switch

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="switch"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Space/Enter |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | Height meets 44 px minimum (verified) |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-checked` |

### Textarea

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.1.3.5 Identify Input Purpose | 1.3.5 | ⚠️ | Add `autocomplete` attribute to examples |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.3.3.1 Error Identification | 3.3.1 | ⚠️ | Wire `aria-invalid` + `aria-errormessage` via `Field` |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### Toggle / ToggleGroup

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="button"` / `role="group"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ⚠️ | Ensure minimum 44×44 px touch target |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-pressed` |

### Field

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.3.3.1 Error Identification | 3.3.1 | ⚠️ | Wire `aria-invalid` + `aria-errormessage` |
| 9.3.3.2 Labels or Instructions | 3.3.2 | ✅ | — |
| 9.3.3.3 Error Suggestion | 3.3.3 | ⚠️ | Error message text must include concrete correction guidance |
| 9.3.3.5 Help (AAA) | 3.3.5 | ❌ | Context-sensitive help (`Field.Help` sub-component) not yet implemented |

### Form

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.3.3.1 Error Identification | 3.3.1 | ⚠️ | Implement error summary on submit |
| 9.3.3.4 Error Prevention | 3.3.4 | ⚠️ | Add review step / confirmation dialog for critical forms |
| 9.3.3.6 Error Prevention (All) (AAA) | 3.3.6 | ❌ | Form review pattern not yet available |

---

## Navigation

### Breadcrumb

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `nav aria-label="Breadcrumb"` |
| 9.2.4.8 Location | 2.4.8 | ✅ | Current page marked with `aria-current="page"` |
| 9.2.4.9 Link Purpose (AAA) | 2.4.9 | ✅ | Link text is unambiguous |

### NavigationMenu

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="navigation"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.1 Bypass Blocks | 2.4.1 | ❌ | Skip link component missing — must precede NavigationMenu |
| 9.2.4.3 Focus Order | 2.4.3 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### Pagination

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `nav aria-label="Pagination"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.9 Link Purpose (AAA) | 2.4.9 | ⚠️ | Add `aria-label="Page X"` to page number buttons |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | All pagination links/buttons → `h-11 w-11` (44×44 px) |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | Ellipsis: `aria-hidden` + `sr-only` set |

### Tabs

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="tablist"`, `role="tab"`, `role="tabpanel"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow key navigation |
| 9.2.4.3 Focus Order | 2.4.3 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | `TabsList h-11`; `TabsTrigger min-h-11` ensures ≥ 44 px touch target |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-selected`, `aria-controls` |

### Menubar

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="menubar"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow keys, Home/End, Escape |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `role="menuitem"` |

### Sidebar

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ⚠️ | Verify `nav aria-label` present on each sidebar instance |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.1 Bypass Blocks | 2.4.1 | ❌ | Skip link must allow sidebar to be bypassed |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |

---

## Overlays

### Dialog

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="dialog"`, `aria-modal`, `aria-labelledby` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ✅ | Focus trap + Escape |
| 9.2.4.3 Focus Order | 2.4.3 | ✅ | Focus moves to first element on open |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.4.13 Focus Not Obscured (AAA) | 2.4.13 | ✅ | Dialog renders above all content |
| 9.3.2.5 Change on Request (AAA) | 3.2.5 | ✅ | Only openable via explicit trigger |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### Sheet

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="dialog"`, `aria-modal` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ✅ | Escape + focus trap |
| 9.2.4.13 Focus Not Obscured (AAA) | 2.4.13 | ✅ | Overlay renders above all content |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### Drawer

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="dialog"` |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ⚠️ | Verify focus trap in Svelte/Angular implementations |
| 9.2.4.13 Focus Not Obscured (AAA) | 2.4.13 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ⚠️ | Verify `aria-labelledby` is present |

### DropdownMenu

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="menu"`, `role="menuitem"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow keys, Escape |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ✅ | Escape closes menu |
| 9.2.4.3 Focus Order | 2.4.3 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### ContextMenu

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.2.1.1 Keyboard | 2.1.1 | ⚠️ | Provide Shift+F10 / context menu key as alternative to right-click |
| 9.2.5.1 Pointer Gestures | 2.5.1 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `role="menu"` |

### HoverCard

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.4.13 Content on Hover or Focus | 1.4.13 | ⚠️ | Content must persist on focus (not hover only); Escape must dismiss |
| 9.2.1.1 Keyboard | 2.1.1 | ⚠️ | Make focusable and dismissible via keyboard |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ⚠️ | Add `aria-describedby` to trigger |

### Popover

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.4.13 Content on Hover or Focus | 1.4.13 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.1.2 No Keyboard Trap | 2.1.2 | ✅ | Escape closes popover |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ⚠️ | Add `aria-expanded` to trigger |

### Tooltip

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.4.13 Content on Hover or Focus | 1.4.13 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `role="tooltip"`, `aria-describedby` |

---

## Layout

### Card / CardHeader / CardTitle / CardDescription / CardContent / CardFooter

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ⚠️ | `CardTitle` must render semantically as `<h2>`–`<h6>` (currently renders as `<div>`) |
| 9.1.3.2 Meaningful Sequence | 1.3.2 | ✅ | — |
| 9.2.4.10 Section Headings (AAA) | 2.4.10 | ⚠️ | Document heading hierarchy requirements in the Composing Guide |

### AspectRatio

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.4.4 Resize Text | 1.4.4 | ✅ | Scales with viewport |

### Separator

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="separator"` or `aria-hidden` for decorative variant |

### ResizablePanels / ResizableHandle

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow keys for handle |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ⚠️ | Add `aria-valuenow` (current width) + `aria-label` to handle |

### ScrollArea

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | `tabIndex={0}` on viewport |
| 9.2.4.13 Focus Not Obscured (AAA) | 2.4.13 | ⚠️ | Set `scroll-padding` to prevent focused elements being hidden behind the scrollbar |

---

## Data Display

### Avatar

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.1.1 Non-text Content | 1.1.1 | ✅ | `alt` required on `AvatarImage`; fallback is visible |
| 9.1.4.3 Contrast (Minimum) | 1.4.3 | ⚠️ | Verify contrast ratio of fallback initials |

### Table / TableHeader / TableBody / TableFooter / TableRow / TableHead / TableCell / TableCaption

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `scope="col"` set on `<th>` |
| 9.1.3.2 Meaningful Sequence | 1.3.2 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### DataTable

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Sorting via keyboard |
| 9.2.4.3 Focus Order | 2.4.3 | ⚠️ | Verify focus order is maintained after pagination/virtualisation page change |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-sort` on sortable columns |

### Empty

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | — |
| 9.1.4.1 Use of Colour | 1.4.1 | ✅ | Illustrations are decorative; no meaning conveyed by colour alone |

### Kbd

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `<kbd>` semantic element used |

### Typography

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | Semantic HTML elements per variant |
| 9.1.4.3 Contrast (Minimum) | 1.4.3 | ✅ | — |
| 9.1.4.6 Contrast (Enhanced) (AAA) | 1.4.6 | ⚠️ | Verify 7:1 ratio for `muted` variant |
| 9.1.4.8 Visual Presentation (AAA) | 1.4.8 | ❌ | Expose line width, line spacing, and letter spacing as consumer props |
| 9.2.4.10 Section Headings (AAA) | 2.4.10 | ✅ | `h1`–`h6` via variant map |

---

## Media

### Carousel / CarouselItem / CarouselPrevious / CarouselNext

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="region"`, `aria-label` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow key navigation |
| 9.2.2.2 Pause, Stop, Hide | 2.2.2 | ⚠️ | Auto-play variant: pause button required |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | Previous/Next buttons verified ≥ 44 px |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-label="Previous"`, `aria-label="Next"` |

### Chart / ChartContainer / ChartTooltip

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.1.1 Non-text Content | 1.1.1 | ❌ | Provide text alternative for chart data (data table or `aria-label` with summary) |
| 9.1.4.1 Use of Colour | 1.4.1 | ❌ | Colour is the sole differentiator for datasets; add patterns or symbols |
| 9.1.4.3 Contrast (Minimum) | 1.4.3 | ⚠️ | Verify chart colours meet 3:1 ratio for graphical objects |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ❌ | Add `role="img"` + `aria-describedby` with data summary |

### Calendar / DatePicker

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="grid"`, `role="gridcell"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | Arrow keys, Enter, Escape |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.2.5.5 Target Size (AAA) | 2.5.5 | ✅ | Day cells → `h-11 w-11` (44×44 px); nav buttons → `h-11 w-11` |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-selected`, `aria-label` on day cells |

---

## Utilities

### Command / CommandInput / CommandList / CommandGroup / CommandItem / CommandEmpty / CommandSeparator

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="combobox"`, `role="listbox"`, `role="option"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.2.4.7 Focus Visible | 2.4.7 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | `aria-activedescendant` |

### Combobox

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.1.3.1 Info and Relationships | 1.3.1 | ✅ | `role="combobox"` |
| 9.2.1.1 Keyboard | 2.1.1 | ✅ | — |
| 9.3.2.5 Change on Request (AAA) | 3.2.5 | ✅ | — |
| 9.4.1.2 Name, Role, Value | 4.1.2 | ✅ | — |

### Sonner

| EN 301 549 | WCAG 2.2 | Status | Outstanding Actions |
|-----------|----------|--------|---------------------|
| 9.2.2.1 Timing Adjustable | 2.2.1 | ⚠️ | Allow timeout to be extended |
| 9.2.2.2 Pause, Stop, Hide | 2.2.2 | ⚠️ | Verify hover/focus pauses auto-dismiss timeout |
| 9.4.1.3 Status Messages | 4.1.3 | ✅ | `aria-live="polite"` |

---

## Summary

| Status | Number of Checkpoints |
|--------|-----------------------|
| ✅ Conformant | approx. 120 checkpoints |
| ⚠️ Partially conformant | approx. 45 checkpoints |
| ❌ Non-conformant | approx. 12 checkpoints |

### Critical Outstanding Issues (❌)

| # | Component | Issue |
|---|-----------|-------|
| 1 | **NavigationMenu / Sidebar** | Skip link missing (`2.4.1`) |
| 2 | **Chart / ChartContainer** | No text alternative for chart data (`1.1.1`) |
| 3 | **Chart** | Colour is the sole differentiator for datasets (`1.4.1`) |
| 4 | **Form** | No form review step (`3.3.6 AAA`) |
| 5 | **Field** | Context-sensitive help missing (`3.3.5 AAA`) |
| 6 | **Typography** | Visual Presentation props not exposed (`1.4.8 AAA`) |

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.0.2 | 2026-04-24 | Initial release of the Compliance Matrix |

---

*This document is updated on every release tag based on the current component implementations.*  
*Standard source: [ETSI EN 301 549 v3.2.1 (2021-03)](https://www.etsi.org/deliver/etsi_en/301500_302000/301549/03.02.01_60/en_301549v030201p.pdf)*
