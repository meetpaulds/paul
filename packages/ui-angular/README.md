# @meetpaul/ui-angular

> *"Never build this button again."* — A sticky note on a monitor in Graz, Austria

**paul** is a complete, production-ready Pattern, Asset & UI Library — a modern, scalable design system built for teams who ship great products. One decision made well, applied everywhere.

This is the **Angular** edition. Built with [Angular CDK](https://material.angular.io/cdk/categories) for accessibility primitives and styled with [Tailwind CSS](https://tailwindcss.com/), it provides standalone Angular components using host-binding-based class composition via CVA.

---

## Installation

```bash
npm install @meetpaul/ui-angular
```

## Quick Start

Import the global styles once in your application entry point (`styles.css` / `angular.json`):

```json
"styles": ["node_modules/@meetpaul/ui/styles/globals.css"]
```

Import and use components directly — all are standalone:

```ts
import { Component } from '@angular/core'
import { ButtonComponent, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent, InputComponent } from '@meetpaul/ui-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent, InputComponent],
  template: `
    <paul-card>
      <paul-card-header>
        <paul-card-title>Hello paul</paul-card-title>
      </paul-card-header>
      <paul-card-content>
        <input paul-input placeholder="Enter your name" />
        <button paul-button class="mt-2">Submit</button>
      </paul-card-content>
    </paul-card>
  `,
})
export class AppComponent {}
```

---

## Component Library

### Actions & Buttons

| Selector | Export | Description |
|----------|--------|-------------|
| `button[paul-button]`, `a[paul-button]` | `ButtonComponent` | Primary action element with 8 variants and 4 sizes, applied as an attribute directive |
| `paul-button-group` | `ButtonGroupComponent` | Horizontal group of buttons with merged borders |
| `button[paul-toggle]` | `ToggleComponent` | Two-state button (pressed/unpressed), implements `ControlValueAccessor` |

### Data Display

| Selector | Export | Description |
|----------|--------|-------------|
| `paul-avatar` | `AvatarComponent` | Avatar container |
| `paul-avatar-image` | `AvatarImageComponent` | Image inside an Avatar; hides on error |
| `paul-avatar-fallback` | `AvatarFallbackComponent` | Fallback initials when image fails |
| `paul-badge` | `BadgeComponent` | Status label with 4 variants |
| `paul-card` | `CardComponent` | Surface container with border and shadow |
| `paul-card-header` | `CardHeaderComponent` | Top section of a Card |
| `paul-card-title` | `CardTitleComponent` | Primary heading inside CardHeader |
| `paul-card-description` | `CardDescriptionComponent` | Supporting text inside CardHeader |
| `paul-card-content` | `CardContentComponent` | Main body of a Card |
| `paul-card-footer` | `CardFooterComponent` | Bottom section of a Card |
| `paul-empty` | `EmptyComponent` | Empty state with `[slot=icon]` and `[slot=action]` slots |
| `paul-kbd` | `KbdComponent` | Keyboard shortcut display |
| `paul-separator` | `SeparatorComponent` | Visual/semantic divider |
| `paul-skeleton` | `SkeletonComponent` | Animated loading placeholder |
| `paul-spinner` | `SpinnerComponent` | Animated loading indicator with 4 sizes |
| `[paul-typography]` | `TypographyDirective` | Text hierarchy directive applied to any element |

### Data Entry & Forms

| Selector | Export | Description |
|----------|--------|-------------|
| `paul-checkbox` | `CheckboxComponent` | Accessible checkbox, implements `ControlValueAccessor` |
| `paul-field` | `FieldComponent` | Form field wrapper with label, hint, and error |
| `input[paul-input]` | `InputComponent` | Single-line text input, implements `ControlValueAccessor` |
| `paul-input-group` | `InputGroupComponent` | Input with prefix/suffix addons |
| `paul-input-group-text` | `InputGroupTextComponent` | Static text addon for InputGroup |
| `label[paul-label]` | `LabelComponent` | Accessible form label |
| `paul-radio-group` | `RadioGroupComponent` | Single-selection control, implements `ControlValueAccessor` |
| `paul-radio-group-item` | `RadioGroupItemComponent` | Individual radio button |
| `paul-slider` | `SliderComponent` | Range value selector, implements `ControlValueAccessor` |
| `paul-switch` | `SwitchComponent` | Toggle switch, implements `ControlValueAccessor` |
| `textarea[paul-textarea]` | `TextareaComponent` | Multi-line text input, implements `ControlValueAccessor` |

### Feedback

| Selector | Export | Description |
|----------|--------|-------------|
| `paul-alert` | `AlertComponent` | Contextual feedback banner (default, destructive) |
| `paul-alert-title` | `AlertTitleComponent` | Heading inside an Alert |
| `paul-alert-description` | `AlertDescriptionComponent` | Description inside an Alert |
| `paul-progress` | `ProgressComponent` | Linear progress bar with `role="progressbar"` |

### Layout

| Selector | Export | Description |
|----------|--------|-------------|
| `paul-aspect-ratio` | `AspectRatioComponent` | Constrains child to a `[ratio]` |
| `paul-scroll-area` | `ScrollAreaComponent` | Scrollable container |

### Overlays & Disclosure

| Selector | Export | Description |
|----------|--------|-------------|
| `paul-accordion` | `AccordionComponent` | Collapsible sections root |
| `paul-accordion-item` | `AccordionItemComponent` | A single accordion section |
| `paul-accordion-trigger` | `AccordionTriggerComponent` | Clickable header |
| `paul-accordion-content` | `AccordionContentComponent` | Collapsible content panel |
| `paul-collapsible` | `CollapsibleComponent` | Expand/collapse region |
| `paul-collapsible-trigger` | `CollapsibleTriggerComponent` | Toggle trigger |
| `paul-collapsible-content` | `CollapsibleContentComponent` | Hidden content area |
| `paul-dialog` | `DialogComponent` | CDK Overlay modal with focus trap |
| `paul-dialog-header` | `DialogHeaderComponent` | Dialog top section |
| `paul-dialog-footer` | `DialogFooterComponent` | Dialog bottom section |
| `paul-dialog-title` | `DialogTitleComponent` | Accessible dialog title |
| `paul-dialog-description` | `DialogDescriptionComponent` | Dialog description |

### Navigation

| Selector | Export | Description |
|----------|--------|-------------|
| `paul-tabs` | `TabsComponent` | Tabbed interface root |
| `paul-tabs-list` | `TabsListComponent` | Container for tab triggers |
| `paul-tabs-trigger` | `TabsTriggerComponent` | Tab button |
| `paul-tabs-content` | `TabsContentComponent` | Tab content panel |

### Tooltip

| Selector | Export | Description |
|----------|--------|-------------|
| `[paulTooltip]` | `TooltipDirective` | CDK Overlay tooltip on hover/focus |

---

## Angular CDK Usage

The following components use **Angular CDK** under the hood:

- **`DialogComponent`** — `@angular/cdk/overlay` + `@angular/cdk/portal` + `@angular/cdk/a11y` (FocusTrap)
- **`TooltipDirective`** — `@angular/cdk/overlay` + `@angular/cdk/portal` with flexible position strategy

## Attribute Directives Pattern

Several components use the **attribute selector** pattern for better HTML semantics:

```html
<!-- ButtonComponent: selector is button[paul-button] -->
<button paul-button variant="destructive">Delete</button>
<a paul-button variant="link" href="/dashboard">Go to Dashboard</a>

<!-- InputComponent: selector is input[paul-input] -->
<input paul-input type="email" placeholder="you@example.com" />

<!-- LabelComponent: selector is label[paul-label] -->
<label paul-label for="email">Email address</label>
```

## Forms Integration

Form components implement Angular's `ControlValueAccessor` and work with both template-driven and reactive forms:

```ts
// Template-driven
<paul-switch [(ngModel)]="isDarkMode" />

// Reactive
<paul-checkbox [formControl]="agreedControl" />
```

## Peer Dependencies

```bash
npm install @angular/core @angular/common @angular/cdk @angular/forms \
  class-variance-authority clsx tailwind-merge
```

## Tech Stack

- **Angular 21+** — standalone components, `@HostBinding`, `@HostListener`, `inject()`
- **Angular CDK** — Overlay, Portal, A11y (FocusTrap)
- **TypeScript 5.9+** — full type safety
- **Tailwind CSS 4** — utility-first styling with CSS variables
- **Class Variance Authority** — variant-based class composition
- **ng-packagr** — Angular Package Format (APF) build output

## Accessibility

Accessibility in paul isn't a checklist item — it's a design constraint that shapes every component from the start.

paul targets **APCA (WCAG 3.0 draft)** compliance alongside **WCAG 2.2 Level AAA** and **EN 301 549 v3.2.1** to meet the requirements of the **European Accessibility Act (EAA)**, enforceable since June 28, 2025.

### APCA — Why we moved beyond WCAG 2.x contrast ratios

WCAG 2.x contrast ratios were a good start. But they treat all color pairs the same — a ratio of 4.5:1 passes whether the text is tiny body copy or a large heading, whether it's dark-on-light or light-on-dark. APCA fixes this. It's a perceptual model based on modern vision science that accounts for spatial frequency, polarity, and how the human visual system actually processes contrast.

paul validates every foreground-background token pair against APCA thresholds in CI. If a token fails, the build fails.

| Threshold | Use case | Equivalent |
|-----------|----------|------------|
| **Lc 75** | Body text | ≈ WCAG 2.x AAA (7:1) |
| **Lc 60** | Large text & UI components | ≈ WCAG 2.x AA (4.5:1) |

**34/34 token pairs passing — 100% compliant**

> WCAG 3.0 is a working draft. paul maintains backward compatibility with WCAG 2.2 Level AAA during the transition period.

### What's covered

- All color tokens validated against APCA thresholds — automated in CI, failures block merges
- 56 components with full keyboard navigation, ARIA roles, and screen reader support
- Touch targets audited to 44×44 px (WCAG 2.5.5 AAA) across all four frameworks
- Accessible authentication patterns: `InputOTP`, `MagicLink`, `PasskeyButton`, `HoneypotField`
- Automated axe-playwright audit on every CI run

### Docs

| Document | Description |
|----------|-------------|
| [Accessibility Statement](https://github.com/meetpaulds/paul/blob/main/docs/a11y-statement.md) | Conformance status, known issues, contact & enforcement — also a reusable template for your own product |
| [EN 301 549 Compliance Matrix](https://github.com/meetpaulds/paul/blob/main/docs/compliance/en301549-matrix.md) | Per-component mapping to EN 301 549 clauses and WCAG 2.2 criteria |
| [APCA Migration Guide](https://github.com/meetpaulds/paul/blob/main/docs/migration/apca-migration.md) | Token changes, thresholds, and visual impact |

---

## License

MIT — Copyright (c) 2026 SirPauls

Built with care (and too much coffee ☕) in Graz, Austria
