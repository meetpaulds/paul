# @meetpaul/tokens

Design tokens for the [paul design system](https://meetpaulds.github.io/paul).  
Framework-agnostic — works with React, Vue, Angular, Svelte, Laravel, or plain HTML.

## Install

```sh
npm install @meetpaul/tokens
```

## Usage

### 1. CSS (any framework)

```css
@import "@meetpaul/tokens/tokens.css";
```

All tokens are available as CSS custom properties using the HSL channel convention,
so you can compose arbitrary alpha values:

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

// Access a specific token
console.log(light.primary)         // '240 5.9% 10%'
console.log(`hsl(${dark.primary})`) // 'hsl(0 0% 98%)'

// Runtime theming
function applyTheme(mode: 'light' | 'dark') {
  const t = tokens[mode]
  document.documentElement.style.setProperty('--primary', t.primary)
}
```

## Token reference

| Token | Light | Dark |
|---|---|---|
| `--background` | `0 0% 100%` | `240 10% 3.9%` |
| `--foreground` | `240 10% 3.9%` | `0 0% 98%` |
| `--primary` | `240 5.9% 10%` | `0 0% 98%` |
| `--secondary` | `240 4.8% 95.9%` | `240 3.7% 15.9%` |
| `--muted` | `240 4.8% 95.9%` | `240 3.7% 15.9%` |
| `--accent` | `240 4.8% 95.9%` | `240 3.7% 15.9%` |
| `--destructive` | `0 84.2% 50%` | `0 62.8% 30.6%` |
| `--destructive-text` | `0 72% 44%` | `0 90% 65%` |
| `--border` | `240 5.9% 90%` | `240 3.7% 15.9%` |
| `--ring` | `240 5.9% 10%` | `240 4.9% 83.9%` |
| `--radius` | `0.5rem` | `0.5rem` |

## License

MIT © [SirPauls](https://github.com/meetpaulds)
