# @meetpaul/ui-vue

> *"Never build this button again."* — A sticky note on a monitor in Graz, Austria

**paul** is a complete, production-ready Pattern, Asset & UI Library — a modern, scalable design system built for teams who ship great products. One decision made well, applied everywhere.

This is the **Vue 3** edition. Built on top of [Radix Vue](https://www.radix-vue.com/) primitives and styled with [Tailwind CSS](https://tailwindcss.com/), it provides 85+ accessible, composable, and beautifully designed components out of the box.

---

## Installation

```bash
npm install @meetpaul/ui-vue
```

## Quick Start

Import the global styles once in your application entry point:

```ts
import '@meetpaul/ui/styles/globals.css'
```

Then register and use any component:

```vue
<script setup lang="ts">
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@meetpaul/ui-vue'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Hello paul</CardTitle>
    </CardHeader>
    <CardContent>
      <Input placeholder="Enter your name" />
      <Button class="mt-2">Submit</Button>
    </CardContent>
  </Card>
</template>
```

---

## Component Library

### Accessibility

| Component | Description |
|-----------|-------------|
| **SkipLink** | Visually hidden anchor visible on focus — allows keyboard users to bypass navigation (WCAG 2.4.1) |
| **ChartDataTable** | Accessible data table alternative for charts with optional `srOnly` mode (WCAG 1.1.1) |
| **FieldHelp** | Context-sensitive help for form fields with info icon and optional external link (WCAG 3.3.5) |

### Actions & Buttons

| Component | Description |
|-----------|-------------|
| **Button** | Primary action component with 8 variants (default, destructive, outline, ghost, link, destructive-outline, destructive-ghost, secondary) and 4 sizes |
| **ButtonGroup** | Group related buttons together with merged borders |
| **Toggle** | A two-state button that can be pressed (on) or unpressed (off) |
| **ToggleGroup** | A set of Toggle buttons where one or many can be active |
| **ToggleGroupItem** | Individual item inside a ToggleGroup |

### Data Display

| Component | Description |
|-----------|-------------|
| **Avatar** | User avatar with image support and fallback initials |
| **AvatarImage** | Image inside an Avatar; auto-hides if it fails to load |
| **AvatarFallback** | Fallback initials or icon shown when AvatarImage cannot load |
| **Badge** | Status indicators, labels, and counts with 4 variants |
| **Card** | Flexible surface container with border and shadow |
| **CardHeader** | Top section of a Card |
| **CardTitle** | Primary heading inside CardHeader |
| **CardDescription** | Supporting text inside CardHeader |
| **CardContent** | Main body area of a Card |
| **CardFooter** | Bottom section of a Card |
| **Empty** | Empty state placeholder with icon, title, description, and action slots |
| **Kbd** | Keyboard shortcut display component |
| **Separator** | Visual or semantic divider between content sections |
| **Skeleton** | Animated loading placeholder |
| **Spinner** | Loading indicator with 4 size variants |
| **Typography** | Text hierarchy components (h1–h4, p, lead, large, small, muted, blockquote, code, list) |

### Data Entry & Forms

| Component | Description |
|-----------|-------------|
| **Checkbox** | Accessible checkbox with indeterminate state support |
| **Field** | Form field wrapper wiring a label, hint, and error message to its input child |
| **Input** | Single-line text input with focus states |
| **InputGroup** | Combine inputs with prefix/suffix addons |
| **InputGroupText** | Static text addon inside an InputGroup |
| **Label** | Accessible form label backed by Radix Vue |
| **RadioGroup** | Single-selection control from multiple options |
| **RadioGroupItem** | Individual radio button inside a RadioGroup |
| **Select** | Dropdown selection backed by Radix Vue |
| **SelectTrigger** | Button that opens the Select dropdown |
| **SelectContent** | Dropdown panel containing SelectItems |
| **SelectItem** | Single selectable option |
| **SelectLabel** | Non-interactive group label inside SelectContent |
| **SelectSeparator** | Horizontal divider inside SelectContent |
| **Slider** | Range value selector with draggable thumbs |
| **Switch** | Toggle switch for binary on/off settings |
| **Textarea** | Multi-line text input |

### Feedback

| Component | Description |
|-----------|-------------|
| **Alert** | Contextual feedback banner (default, destructive) |
| **AlertTitle** | Primary heading inside an Alert |
| **AlertDescription** | Supporting description inside an Alert |
| **Progress** | Linear progress bar with `role="progressbar"` |

### Layout

| Component | Description |
|-----------|-------------|
| **AspectRatio** | Constrains its child to a specific width-to-height ratio |
| **ScrollArea** | Custom scrollable container with styled scrollbars |

### Navigation

| Component | Description |
|-----------|-------------|
| **Menubar** | Horizontal menu bar with nested dropdowns |
| **MenubarMenu** | A single menu entry in the Menubar |
| **MenubarTrigger** | Button in the Menubar that opens a dropdown |
| **MenubarContent** | Floating dropdown panel |
| **MenubarItem** | Selectable action inside MenubarContent |
| **MenubarSeparator** | Divider between MenubarItem groups |
| **Tabs** | Tabbed interface for switching between content panels |
| **TabsList** | Container for tab trigger buttons |
| **TabsTrigger** | Tab button that activates a TabsContent panel |
| **TabsContent** | Content panel shown when its tab is active |

### Overlays

| Component | Description |
|-----------|-------------|
| **Dialog** | Modal window for focused tasks |
| **DialogTrigger** | Element that opens the Dialog |
| **DialogContent** | Modal panel with optional close button |
| **DialogHeader** | Top section of DialogContent |
| **DialogFooter** | Bottom section of DialogContent |
| **DialogTitle** | Accessible title for the Dialog |
| **DialogDescription** | Optional supporting description |
| **DropdownMenu** | Contextual menu triggered by a button |
| **DropdownMenuTrigger** | Element that opens the DropdownMenu |
| **DropdownMenuContent** | Floating panel with menu items |
| **DropdownMenuItem** | Single selectable item |
| **DropdownMenuSeparator** | Horizontal divider |
| **DropdownMenuLabel** | Non-interactive group label |
| **HoverCard** | Rich tooltip card appearing on hover |
| **HoverCardTrigger** | Element that reveals the HoverCard |
| **HoverCardContent** | Floating card content panel |
| **Popover** | Floating panel for contextual information or forms |
| **PopoverTrigger** | Element that opens the Popover |
| **PopoverContent** | Floating panel content |
| **Tooltip** | Concise text label on hover or focus |

### Disclosure

| Component | Description |
|-----------|-------------|
| **Accordion** | Collapsible content sections |
| **AccordionItem** | A single accordion section |
| **AccordionTrigger** | Clickable header that toggles the section |
| **AccordionContent** | Collapsible content panel |
| **Collapsible** | Expand/collapse a single region with animation |
| **CollapsibleTrigger** | Trigger that toggles the Collapsible |
| **CollapsibleContent** | Hidden content area of a Collapsible |

### Utilities

| Component | Description |
|-----------|-------------|
| **ContextMenu** | Right-click context menu |
| **ContextMenuTrigger** | Element that opens the ContextMenu |
| **ContextMenuContent** | Floating panel with menu items |
| **ContextMenuItem** | Single selectable item in a ContextMenu |

---

## Peer Dependencies

This package requires Vue 3.3+ as a peer dependency:

```bash
npm install vue
```

## Tech Stack

- **Vue 3.3+** — `<script setup>`, `defineModel`, `useId`
- **TypeScript** — full type safety with declaration files
- **Tailwind CSS 4** — utility-first styling with CSS variables
- **Radix Vue** — accessible, unstyled primitive components
- **Class Variance Authority** — variant-based class composition
- **Vite** — library mode build with ESM + CJS output

## Styling

Components use the same CSS variables as `@meetpaul/ui`. Import the global stylesheet from the React package or your app entry point:

```ts
import '@meetpaul/ui/styles/globals.css'
```

## Design Notes

### Radix Vue props as fallthrough attrs

For Radix-backed components (e.g. `Dialog`, `Select`, `Tabs`), the Radix root props are passed through as Vue [fallthrough attrs](https://vuejs.org/guide/components/attrs.html) (`$attrs`) rather than declared in `defineProps`. This is the recommended pattern for Vue 3 component libraries and is consistent with how [shadcn-vue](https://www.shadcn-vue.com/) works.

This means you can pass any Radix prop directly on the component:

```vue
<Accordion type="single" collapsible default-value="item-1">
```

### Composing with class

Every component accepts a `class` prop for ad-hoc style overrides, merged via `cn` (clsx + tailwind-merge):

```vue
<Button class="w-full mt-4">Full width</Button>
```

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

## Accessibility

Accessibility in paul isn't a checklist item — it's a design constraint that shapes every component from the start.

paul is **The new European Standard for Inclusive Digital Products** — built to fully comply with **EN 301 549 v3.2.1**, the technical standard underpinning the **European Accessibility Act (EAA)**, enforceable since June 28, 2025. It also targets **WCAG 2.2 Level AAA** and the forward-looking **APCA (WCAG 3.0 draft)** perceptual contrast model.

- **EN 301 549 v3.2.1** — full compliance matrix across all 56 components
- All color tokens validated against APCA thresholds (Lc 75 body text, Lc 60 UI components) — 34/34 passing
- Full keyboard navigation, ARIA roles, and screen reader support (NVDA + VoiceOver)
- Touch targets audited to 44×44 px (WCAG 2.5.5 AAA)
- Automated axe-playwright audit on every CI run

| Document | Description |
|----------|-------------|
| [Accessibility Statement](https://github.com/meetpaulds/paul/blob/main/docs/a11y-statement.md) | Conformance status, known issues, contact & enforcement |
| [EN 301 549 Compliance Matrix](https://github.com/meetpaulds/paul/blob/main/docs/compliance/en301549-matrix.md) | Per-component mapping to EN 301 549 clauses |
| [APCA Migration Guide](https://github.com/meetpaulds/paul/blob/main/docs/migration/apca-migration.md) | Token changes, thresholds, and visual impact |

## License

MIT — Copyright (c) 2026 SirPauls

Built with care (and too much coffee ☕) in Graz, Austria
