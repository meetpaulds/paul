# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.2.0]: https://github.com/meetpaulds/paul/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/meetpaulds/paul/releases/tag/v0.1.0
