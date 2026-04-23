# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.2] — 2026-04-23

### Fixed

- **Framework harmonization** — React components remain the source of truth; all Vue, Svelte, and Angular components audited and aligned for visual/structural parity:
  - **Accordion** — Svelte & Angular triggers wrapped in `<div class="flex">`; Svelte & Angular content panels received inner `<div class="pb-4 pt-0">` padding divs and `data-[state=open]:animate-accordion-down` / `data-[state=closed]:animate-accordion-up` animation classes; Vue root removed redundant `divide-y divide-border` to prevent double borders
  - **Sheet** — Svelte: added missing `gap-4` class and close button with SVG icon + `sr-only` text; Angular: replaced plain `✕` text close button with SVG icon, `sr-only` text, and `focus:ring-2 focus:ring-offset-2` focus styles
  - **Dialog** — Vue close button upgraded from `focus:ring-1` to `focus:ring-2 focus:ring-offset-2` to match React
  - **Breadcrumb** — Angular `BreadcrumbSeparator` switched from plain `/` text to `<ng-content>` slot accepting an SVG icon (ChevronRight) with `aria-hidden="true"`
  - **Pagination** — Angular `PaginationEllipsis` replaced plain `…` text with inline MoreHorizontal SVG + `<span class="sr-only">More pages</span>`
  - **Select** — Vue `SelectLabel` font size corrected from `text-xs` to `text-sm`
- **WCAG 2.4.13 (Focus Not Obscured AAA)** — batch-upgraded `focus-visible:ring-1` → `focus-visible:ring-2` across 27+ files in all four framework libraries (Button, Checkbox, Input, RadioGroup, Resizable, Slider, Textarea, Toggle)

### Changed

- **Storybook introduction pages** — added `introduction.mdx` to Vue, Svelte, and Angular storybooks (React already had one); all four storybooks now open with the same onboarding docs
- **Angular Accordion story** — added missing `collapsible` attribute to match React/Vue/Svelte story behavior

---

## [1.0.1] — 2026-04-21

### Added

- **Multi-framework Storybook** — four fully independent Storybook apps now compose into a single Storybook Composition hub:
  - `apps/storybook` (React, existing) — 56 stories
  - `apps/storybook-svelte` (Svelte 5 + `@storybook/svelte-vite`) — 56 stories covering all `@meetpaul/ui-svelte` components
  - `apps/storybook-vue` (`@storybook/vue3-vite`) — 56 stories covering all `@meetpaul/ui-vue` components
  - `apps/storybook-angular` (`@storybook/angular`) — 56 stories covering all `@meetpaul/ui-angular` components
- **`@meetpaul/ui-svelte` — new components** — `AlertDialog`, `Breadcrumb`/`BreadcrumbList`/`BreadcrumbItem`/`BreadcrumbLink`/`BreadcrumbPage`/`BreadcrumbSeparator`, `Calendar`, `Carousel`/`CarouselItem`, `ChartContainer`/`ChartTooltip`, `Command`/`CommandGroup`/`CommandItem`/`CommandSeparator`, `ContextMenu`, `Drawer`, `DropdownMenu`/`DropdownMenuItem`/`DropdownMenuLabel`/`DropdownMenuSeparator`, `HoverCard`, `InputOTP`, `Menubar`/`MenubarMenu`/`MenubarTrigger`/`MenubarItem`/`MenubarSeparator`, `NavigationMenu`/`NavigationMenuList`/`NavigationMenuLink`, `Pagination`/`PaginationContent`/`PaginationItem`/`PaginationLink`/`PaginationPrevious`/`PaginationNext`/`PaginationEllipsis`, `Popover`, `ResizableHandle`/`ResizablePanel`/`ResizablePanelGroup`, `Sheet`, `Sidebar`/`SidebarHeader`/`SidebarContent`/`SidebarMenu`/`SidebarMenuItem`/`SidebarMenuButton`, `Sonner`, `Table`/`TableHeader`/`TableBody`/`TableFooter`/`TableRow`/`TableHead`/`TableCell`/`TableCaption`, `Toast`/`ToastTitle`/`ToastDescription`/`ToastViewport`, `ToggleGroup`/`ToggleGroupItem`
- **`@meetpaul/ui-vue` — new components** — `AlertDialog`/`AlertDialogTrigger`/`AlertDialogContent`/`AlertDialogHeader`/`AlertDialogFooter`/`AlertDialogTitle`/`AlertDialogDescription`/`AlertDialogAction`/`AlertDialogCancel`, `Breadcrumb` family, `Calendar`, `Carousel`/`CarouselContent`/`CarouselItem`/`CarouselPrevious`/`CarouselNext`, `ChartContainer`/`ChartTooltip`, `Combobox`, `Command`/`CommandInput`/`CommandList`/`CommandGroup`/`CommandItem`/`CommandSeparator`/`CommandEmpty`, `DataTable`, `DatePicker`, `Drawer` family, `InputOTP`, `NavigationMenu`/`NavigationMenuList`/`NavigationMenuItem`/`NavigationMenuTrigger`/`NavigationMenuContent`/`NavigationMenuLink`, `Pagination` family, `ResizablePanelGroup`/`ResizablePanel`/`ResizableHandle`, `Sheet` family, `Sidebar`/`SidebarProvider`/`SidebarTrigger`/`SidebarHeader`/`SidebarContent`/`SidebarFooter`/`SidebarGroup`/`SidebarMenu`/`SidebarMenuItem`/`SidebarMenuButton`, `Table` family, `Toast`/`ToastProvider`/`ToastTitle`/`ToastDescription`/`ToastAction`/`ToastClose`/`ToastViewport`, `Toaster`
- **`@meetpaul/ui-angular` — new components** — `AlertDialog`, `Breadcrumb` family, `Calendar`, `Carousel`/`CarouselItem`, `ChartContainer`/`ChartTooltip`, `Command`/`CommandGroup`/`CommandItem`/`CommandSeparator`, `ContextMenu` family, `Drawer`, `DropdownMenu` family, `HoverCard`, `InputOTP`, `Menubar` family, `NavigationMenu` family, `Pagination` family, `Popover`, `ResizablePanelGroup`/`ResizablePanel`/`ResizableHandle`, `Select`/`SelectItem`, `Sheet`, `Sidebar` family, `Sonner`, `Table` family, `Toast`/`ToastTitle`/`ToastDescription`/`ToastViewport`, `ToggleGroup`/`ToggleGroupItem`
- **`@meetpaul/ui-vue`** — `ChartContainer` and `ChartTooltip` components; `ChartContainer` accepts a `config` prop to inject `--color-*` CSS custom properties

### Fixed

- **Angular Storybook build** — resolved `@ngtools/webpack` "file missing from TypeScript compilation" error by introducing a scoped `tsconfig.storybook.json`; `globals.css` now processed via `postcss.config.cjs` + `@tailwindcss/postcss` instead of a broken Vite import
- **Vue Storybook build** — `chart.stories.ts` added; all 4 framework Storybooks now build successfully with 56 stories each
- **`.gitignore`** — added `.angular/` cache directory; untracked previously committed `storybook-static/` build output

---

## [1.0.0] — 2026-04-21

### Added

- **`@meetpaul/ui-svelte`** — Svelte 5 component library (55 components) using Melt UI primitives and Svelte 5 runes syntax (`$props()`, `$state()`, `$derived()`, `$effect()`); full `bind:` reactive props, Svelte 5 snippets for `Field` and `Empty`, JSDoc on all components, README
- **`@meetpaul/ui-angular`** — Angular 21 standalone component library (55 components) using Angular CDK for accessibility, `class-variance-authority` for variants, JSDoc on all components, README
- **`@meetpaul/ui-vue`** — Vue 3 component library (55 components) using Headless UI and `class-variance-authority`, Composition API, JSDoc on all components, README
- **`@meetpaul/tokens`** — extracted design token package; exports CSS custom properties (`globals.css`), a JavaScript token object, and a Tailwind CSS preset for cross-framework token sharing

### Changed

- **Version alignment** — all packages (`@meetpaul/ui`, `@meetpaul/ui-vue`, `@meetpaul/ui-angular`, `@meetpaul/ui-svelte`, `@meetpaul/tokens`) aligned to `1.0.0` marking general availability

### Breaking

- This is the **1.0.0 stable release**. All packages follow semantic versioning from this point forward.

---

## [0.4.0] — 2026-04-20

### Added

- **Destructive button variants** — `destructive-outline` (red border + text, transparent bg) and `destructive-ghost` (red text only) added to `buttonVariants`; covered by new unit tests and Storybook stories
- **JSDoc on all 35 components** — every exported component now has a component-level JSDoc block with description, `@example` snippet, and `@accessibility` notes where relevant

### Changed

- **Typography polymorphism** — removed `as` prop; each variant now auto-renders its semantic HTML element via an internal `variantElementMap` (`h1`→`<h1>`, `lead`→`<p>`, `list`→`<ul>`, etc.); `asChild` delegates correctly to `@radix-ui/react-slot`
- **Dependencies** — moved all Radix UI, TanStack Table, lucide-react, recharts, and other runtime packages from `peerDependencies` to `dependencies`; only `react` and `react-dom` (`>=18.0.0 || >=19.0.0`) remain as peers

### Breaking

- **`Typography` `as` prop removed** — replace `<Typography as="h1">` with `<Typography variant="h1">`

---

## [0.3.0] — 2026-04-20

### Added

- **Storybook introduction page** (`paul / Introduction`) — origin story, values, component list, quick start code block, and get involved CTA sourced from the `meetpaulds` GitHub profile

### Changed

- **Bundle size** — externalised all Radix UI, TanStack Table, lucide-react, recharts, date-fns, embla-carousel, cmdk, sonner, vaul and other heavy runtime deps; ESM bundle drops from 780kb to 92kb (gzip: 203kb → 17kb)
- **`peerDependencies`** — all externalised packages moved from `dependencies` to `peerDependencies`; `clsx`, `class-variance-authority`, `tailwind-merge` remain as direct deps
- **`homepage`** — updated to `https://meetpaulds.github.io/paul` (live Storybook)
- **npm keywords** — added `radix-ui`, `accessibility`, `wcag`, `typescript`, `dark-mode`

### Fixed

- **CI — Chromatic** — replaced `chromaui/action@v1` (bundled CLI 11.x) with direct `pnpm chromatic` call using locally installed `chromatic@16.3.0`
- **Unit test** — `alert.test.tsx` destructive variant assertion updated from `text-destructive` to `text-destructive-text`
- **`.gitignore`** — added `storybook-static/`, `playwright-report/`, `test-results/`, `.playwright/`

### Infrastructure

- **Automated npm publish** — added `publish` job to `ci.yml`; runs on push to `main` only, after `ci` job passes, uses `npm publish --provenance --access public` (requires `NPM_TOKEN` secret)

---

## [0.2.0] — 2026-04-20

### Fixed

- **WCAG 2.1 AA contrast** — restored full compliance in both light and dark mode without any axe bypasses or `color-contrast` suppressions
- **`--destructive` token split** — introduced `--destructive-text` semantic token for text-on-background use cases (`Alert` variant, `Field` error, required asterisk); `--destructive` remains the background-fill token
  - Light `--destructive-text`: `hsl(0,72%,44%)` → 6.02:1 on white
  - Dark `--destructive-text`: `hsl(0,90%,65%)` → high contrast on near-black
  - Light `--destructive`: `hsl(0,84.2%,50%)` with pure-white foreground → 4.53:1 ✓
- **`--muted-foreground` light**: `hsl(240,5%,38%)` → 6.61:1 on white (up from borderline 4.48:1)
- **`--destructive-foreground`**: set to pure white (`100%`) in both modes for accurate axe computation
- **`Alert` destructive variant**: `text-destructive` → `text-destructive-text`
- **`Field` error & required asterisk**: `text-destructive` → `text-destructive-text`
- **`HoverCard` stories**: added `alt="Vercel"` to `AvatarImage` (`image-alt` violation)
- **Release artifacts**: `CHANGELOG.md`, consumer `README.md` corrections, `deploy-storybook.yml` GitHub Pages workflow, unit test step in `ci.yml`

### Removed

- All `color-contrast` axe suppressions from `preview.ts`, `test-runner.ts`, and per-story overrides (`alert-dialog`, `badge`, `slider`)

---

## [0.1.0] — 2026-04-20

### Added

- **56 UI components** built on Radix UI primitives and styled with Tailwind CSS v4
  — `Accordion`, `Alert`, `AlertDialog`, `AspectRatio`, `Avatar`, `Badge`, `Button`, `ButtonGroup`, `Calendar`, `Card`, `Carousel`, `Chart`, `Checkbox`, `Collapsible`, `Combobox`, `Command`, `ContextMenu`, `DataTable`, `DatePicker`, `Dialog`, `Drawer`, `DropdownMenu`, `Empty`, `Field`, `Form`, `HoverCard`, `Input`, `InputGroup`, `InputOTP`, `Kbd`, `Label`, `Menubar`, `NavigationMenu`, `Pagination`, `Popover`, `Progress`, `RadioGroup`, `ResizablePanels`, `ScrollArea`, `Select`, `Separator`, `Sheet`, `Sidebar`, `Skeleton`, `Slider`, `Sonner`, `Switch`, `Table`, `Tabs`, `Textarea`, `Toast`, `Toggle`, `ToggleGroup`, `Tooltip`, `Typography`
- **Storybook** documentation app with stories for every component, dark mode variants, and interactive play-tests
- **TSDoc comments** on every component and prop for auto-generated Storybook Docs
- **Automated a11y audit** via `@storybook/test-runner` + `axe-playwright` — 177/177 stories passing
- **Unit tests** for all 53 testable components via Vitest + Testing Library
- **CSS design tokens** (`globals.css`) with light and dark mode via Tailwind CSS v4 `@theme`
- **Montserrat** as the default sans-serif font

### Accessibility fixes

- `Progress` — default `aria-label="Progress"` on `role="progressbar"`
- `ToastClose` — `aria-label="Close"` and `aria-hidden` on dismiss icon
- `ScrollArea` — `tabIndex={0}` on viewport for keyboard scrollability
- `Combobox` — `aria-label` from `placeholder` on trigger; chevron marked `aria-hidden`
- `InputOTP` — default `aria-label="One-time password"` on hidden input
- `Slider` — default `aria-label="Value"` on thumb (`role="slider"` requires accessible name)

### Fixed

- ESLint `no-undef` error on `IntersectionObserver` in test setup (`packages/ui/src/test/setup.ts`)
- Storybook a11y test runner now merges per-story rule overrides with global suppressions

[1.0.2]: https://github.com/meetpaulds/paul/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/meetpaulds/paul/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/meetpaulds/paul/compare/v0.4.0...v1.0.0
[0.4.0]: https://github.com/meetpaulds/paul/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/meetpaulds/paul/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/meetpaulds/paul/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/meetpaulds/paul/releases/tag/v0.1.0
