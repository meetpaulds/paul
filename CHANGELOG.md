# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.1.0]: https://github.com/meetpaulds/paul/releases/tag/v0.1.0
