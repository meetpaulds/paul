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

## License

MIT — Copyright (c) 2026 SirPauls

Built with care (and too much coffee ☕) in Graz, Austria
