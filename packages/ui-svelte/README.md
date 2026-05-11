# @meetpaul/ui-svelte

> *"Never build this button again."* — A sticky note on a monitor in Graz, Austria

**paul** is a complete, production-ready Pattern, Asset & UI Library — a modern, scalable design system built for teams who ship great products. One decision made well, applied everywhere.

This is the **Svelte 5** edition. Built with [Melt UI](https://melt-ui.com) for accessible, unstyled primitives and styled with [Tailwind CSS](https://tailwindcss.com/). All components are written in Svelte 5 runes syntax (`$props()`, `$state()`, `$derived()`, `$effect()`).

---

## Installation

```bash
npm install @meetpaul/ui-svelte
```

## Quick Start

Import the global styles once in your app entry point:

```css
/* app.css or +layout.svelte */
@import '@meetpaul/ui/styles/globals.css';
```

Use components directly — all are tree-shakeable named exports:

```svelte
<script>
  import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@meetpaul/ui-svelte'
  let email = $state('')
</script>

<Card>
  <CardHeader>
    <CardTitle>Hello paul</CardTitle>
  </CardHeader>
  <CardContent>
    <Input type="email" placeholder="you@example.com" bind:value={email} />
    <Button class="mt-2">Submit</Button>
  </CardContent>
</Card>
```

---

## Component Library

### Actions & Buttons

| Component | Description |
|-----------|-------------|
| `Button` | Primary action element. Supports `variant` (8 options) and `size` (4 options). Renders an `<a>` when `href` is provided. |
| `ButtonGroup` | Horizontal group of buttons with merged borders. |
| `Toggle` | Two-state button backed by Melt UI. Use `bind:pressed`. |

### Data Display

| Component | Description |
|-----------|-------------|
| `Avatar` | Container for user avatars. |
| `AvatarImage` | Image inside Avatar. Shows fallback on `onerror`. |
| `AvatarFallback` | Initials or icon when AvatarImage fails to load. |
| `Badge` | Small inline label. Supports `variant`: `default`, `secondary`, `destructive`, `outline`. |
| `Card` | Surface container with border and shadow. |
| `CardHeader` | Top section of a Card. |
| `CardTitle` | Primary heading inside CardHeader. |
| `CardDescription` | Supporting text inside CardHeader. |
| `CardContent` | Main body area of a Card. |
| `CardFooter` | Bottom section of a Card. |
| `Empty` | Empty state with `icon`, `title`, `description`, and `action` snippets. |
| `Kbd` | Keyboard shortcut display. |
| `Separator` | Visual/semantic divider backed by Melt UI. Supports `orientation`. |
| `Skeleton` | Animated loading placeholder. |
| `Spinner` | Animated loading indicator. Supports `size`: `sm`, `default`, `lg`, `xl`. |
| `Typography` | Semantic text with consistent styling. Supports `variant`: `h1`–`h4`, `p`, `lead`, `large`, `small`, `muted`, `blockquote`, `code`, `list`. |

### Data Entry & Forms

| Component | Description |
|-----------|-------------|
| `Checkbox` | Accessible checkbox backed by Melt UI. Use `bind:checked`. Supports `indeterminate`. |
| `Field` | Form field wrapper wiring a label, hint, and error message to its input via the `input` snippet. |
| `Input` | Single-line text input. Use `bind:value`. |
| `InputGroup` | Input with prefix/suffix addons. |
| `InputGroupText` | Static text addon for InputGroup. |
| `Label` | Accessible form label backed by Melt UI. |
| `RadioGroup` | Single-selection control backed by Melt UI. Use `bind:value`. |
| `RadioGroupItem` | Individual radio button. Requires `value` and optional `label` for a11y. |
| `Select` | Dropdown selection backed by Melt UI. Use `bind:value`. |
| `SelectItem` | A single option inside Select. Requires `value`. |
| `Slider` | Range value selector backed by Melt UI. Use `bind:value` (array). |
| `Switch` | Toggle switch backed by Melt UI. Use `bind:checked`. |
| `Textarea` | Multi-line text input. Use `bind:value`. |

### Feedback

| Component | Description |
|-----------|-------------|
| `Alert` | Contextual feedback banner. Supports `variant`: `default`, `destructive`. |
| `AlertTitle` | Heading inside an Alert. |
| `AlertDescription` | Description inside an Alert. |
| `Progress` | Linear progress bar backed by Melt UI. Accepts `value` and `max`. |

### Layout

| Component | Description |
|-----------|-------------|
| `AspectRatio` | Constrains child to a `ratio` (default `16/9`). |
| `ScrollArea` | Scrollable container with overflow handling. |

### Overlays & Disclosure

| Component | Description |
|-----------|-------------|
| `Accordion` | Collapsible sections root backed by Melt UI. |
| `AccordionItem` | A single accordion section. Requires `value`. |
| `AccordionTrigger` | Clickable header that toggles the section. Requires `value`. |
| `AccordionContent` | Content panel. Requires `value` matching its `AccordionItem`. |
| `Collapsible` | Expand/collapse region backed by Melt UI. Use `bind:open`. |
| `CollapsibleTrigger` | Toggle trigger for Collapsible. |
| `CollapsibleContent` | Hidden content area of Collapsible. |
| `Dialog` | Modal dialog backed by Melt UI with focus trapping. Use `bind:open`. |
| `DialogHeader` | Layout wrapper for title and description at the top. |
| `DialogFooter` | Layout wrapper for action buttons at the bottom. |
| `DialogTitle` | Accessible dialog title (linked via Melt UI). |
| `DialogDescription` | Supporting description (linked via Melt UI). |

### Navigation

| Component | Description |
|-----------|-------------|
| `Tabs` | Tabbed interface root backed by Melt UI. Use `defaultValue` or `bind:value`. |
| `TabsList` | Container for TabsTrigger buttons, styled as a segmented control. |
| `TabsTrigger` | Tab button. Requires `value`. |
| `TabsContent` | Content panel shown when its tab is active. Requires `value`. |

### Tooltip

| Component | Description |
|-----------|-------------|
| `Tooltip` | Concise label on hover/focus backed by Melt UI. Pass `content` as a prop. |

---

## Melt UI Primitives

The following components use **Melt UI** under the hood via `createX()` builders and the `use:melt` action:

| Component | Builder |
|-----------|---------|
| `Accordion` family | `createAccordion` |
| `Checkbox` | `createCheckbox` |
| `Collapsible` family | `createCollapsible` |
| `Dialog` family | `createDialog` |
| `Label` | `createLabel` |
| `Progress` | `createProgress` |
| `RadioGroup` family | `createRadioGroup` |
| `Select` family | `createSelect` |
| `Separator` | `createSeparator` |
| `Slider` | `createSlider` |
| `Switch` | `createSwitch` |
| `Tabs` family | `createTabs` |
| `Toggle` | `createToggle` |
| `Tooltip` | `createTooltip` |

## Reactive Bindings

Melt UI components expose state via Svelte 5's `bind:` directive:

```svelte
<script>
  import { Checkbox, Switch, Slider, Select, SelectItem } from '@meetpaul/ui-svelte'
  let checked = $state(false)
  let darkMode = $state(false)
  let volume = $state([50])
  let fruit = $state('')
</script>

<Checkbox bind:checked id="agree" />
<Switch bind:checked={darkMode} label="Dark mode" />
<Slider bind:value={volume} min={0} max={100} />
<Select bind:value={fruit} placeholder="Choose a fruit">
  <SelectItem value="apple">Apple</SelectItem>
  <SelectItem value="banana">Banana</SelectItem>
</Select>
```

## Snippet Pattern (Empty, Field)

`Empty` and `Field` use Svelte 5 snippets for flexible content injection:

```svelte
<script>
  import { Empty, Field, Input } from '@meetpaul/ui-svelte'
  let email = $state('')
  let error = $state('')
</script>

<Field label="Email" hint="We'll never share it." error={error} required>
  {#snippet input({ id })}
    <Input {id} type="email" bind:value={email} />
  {/snippet}
</Field>

<Empty title="No results" description="Try adjusting your search.">
  {#snippet icon()}
    <svg><!-- search icon --></svg>
  {/snippet}
</Empty>
```

## Peer Dependencies

```bash
npm install svelte @melt-ui/svelte class-variance-authority clsx tailwind-merge
```

## Tech Stack

- **Svelte 5** — runes syntax (`$props()`, `$state()`, `$derived()`, `$effect()`, snippets)
- **Melt UI 0.86** — headless accessible primitives via `createX()` + `use:melt`
- **TypeScript 5.9+** — full type safety with explicit interface props
- **Tailwind CSS 4** — utility-first styling with CSS variable design tokens
- **Class Variance Authority** — variant-based class composition
- **Vite 8 + @sveltejs/vite-plugin-svelte 7** — ES module library build

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

paul is built to meet **EN 301 549 — The new European Standard for Inclusive Digital Products**, the technical standard underpinning the **European Accessibility Act (EAA)**, enforceable since June 28, 2025. It also targets **WCAG 2.2 Level AAA** and the forward-looking **APCA (WCAG 3.0 draft)** perceptual contrast model.

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
