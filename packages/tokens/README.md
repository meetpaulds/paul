# @meetpaul/tokens

> *"Never build this button again."* — A sticky note on a monitor in Graz, Austria

Design tokens for the [paul design system](https://meetpaulds.github.io/paul) — framework-agnostic, works with React, Vue, Angular, Svelte, Laravel, or plain HTML.

paul started with a simple frustration: every project rebuilt the same colors, the same spacing, the same dark mode — slightly differently, with slightly different contrast, slightly different accessibility. So we extracted the decisions into tokens. One set of values, validated once, applied everywhere.

As of v1.0.1, all tokens are validated against **APCA (WCAG 3.0 draft)** — the most accurate perceptual contrast model available. Not because a checkbox said so, but because the people using your product deserve text they can actually read.

---

## Install

```sh
npm install @meetpaul/tokens
```

---

## Usage

### 1. CSS (any framework)

```css
@import "@meetpaul/tokens/tokens.css";
```

All tokens are CSS custom properties using the HSL channel convention — compose arbitrary alpha values:

```css
.my-button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border) / 0.5);
}
```

Dark mode is handled via the `.dark` class on any ancestor element.

### 2. Tailwind v4

```css
/* globals.css */
@import "@meetpaul/tokens/tokens.css";
@import "tailwindcss";

@theme inline {
  --color-background:  hsl(var(--background));
  --color-foreground:  hsl(var(--foreground));
  --color-primary:     hsl(var(--primary));
  /* ... all tokens already mapped in @meetpaul/ui */
}
```

### 3. Tailwind v3 preset (JS config)

```js
// tailwind.config.js
import { tailwindPreset } from '@meetpaul/tokens/preset'

export default {
  presets: [tailwindPreset],
  content: ['./src/**/*.{html,js,vue,tsx}'],
}
```

### 4. JS token object (runtime / Style Dictionary / Figma)

```ts
import { tokens, light, dark } from '@meetpaul/tokens'

console.log(light.primary)          // '240 5.9% 10%'
console.log(`hsl(${dark.primary})`) // 'hsl(0 0% 98%)'

function applyTheme(mode: 'light' | 'dark') {
  const t = tokens[mode]
  document.documentElement.style.setProperty('--primary', t.primary)
}
```

---

## Token reference

All foreground tokens include inline `/* Lc XX.X on --background */` comments documenting their APCA contrast values directly in the CSS.

| Token | Light | Dark |
|---|---|---|
| `--background` | `0 0% 100%` | `240 10% 3.9%` |
| `--foreground` | `240 10% 3.9%` | `0 0% 98%` |
| `--primary` | `240 5.9% 10%` | `0 0% 98%` |
| `--secondary` | `240 4.8% 95.9%` | `240 3.7% 15.9%` |
| `--muted` | `240 4.8% 95.9%` | `240 3.7% 15.9%` |
| `--muted-foreground` | `240 5% 33%` | `240 5% 82.7%` |
| `--accent` | `240 4.8% 95.9%` | `240 3.7% 15.9%` |
| `--destructive` | `0 84.2% 50%` | `0 62.8% 30.6%` |
| `--destructive-text` | `0 72% 39%` | `0 90% 78.5%` |
| `--border` | `240 5.9% 90%` | `240 3.7% 15.9%` |
| `--ring` | `240 5.9% 10%` | `240 4.9% 83.9%` |
| `--radius` | `0.5rem` | `0.5rem` |

---

## ♿ APCA Compliance

paul is **The new European Standard for Inclusive Digital Products** — built to fully comply with **EN 301 549 v3.2.1**, the technical standard underpinning the **European Accessibility Act (EAA)**, enforceable since June 28, 2025.

WCAG 2.x contrast ratios were a good start. APCA is what comes next — a perceptual model based on modern vision science that accounts for spatial frequency, polarity, and how the human visual system actually processes contrast.

paul was one of the first design systems to adopt APCA in production. Every token pair is validated automatically in CI.

| Threshold | Use case | Equivalent |
|-----------|----------|------------|
| **Lc 75** | Body text | ≈ WCAG 2.x AAA (7:1) |
| **Lc 60** | Large text & UI components | ≈ WCAG 2.x AA (4.5:1) |

**34/34 token pairs passing — 100% compliant**

```bash
# Validate all tokens against APCA thresholds
pnpm run validate:apca

# Generate a JSON report
pnpm run validate:apca:json
```

> WCAG 3.0 is a working draft. paul maintains backward compatibility with WCAG 2.2 Level AAA during the transition period.

Full details: [APCA Migration Guide](https://github.com/meetpaulds/paul/blob/main/docs/migration/apca-migration.md) · [Contrast Audit](https://github.com/meetpaulds/paul/blob/main/docs/compliance/contrast-audit.md)

---

## License

MIT — built with care (and too much coffee) in Graz by [@SirPauls](https://github.com/sirpauls)
