/**
 * Tailwind v4 preset for `@meetpaul/tokens`.
 *
 * Add to your `globals.css`:
 * ```css
 * @import "@meetpaul/tokens/tokens.css";
 * @import "tailwindcss";
 *
 * @theme inline {
 *   --color-background: hsl(var(--background));
 *   --color-foreground: hsl(var(--foreground));
 *   ...
 * }
 * ```
 *
 * Or import the pre-built preset object for programmatic use with
 * Tailwind v3 / tooling that reads a JS config:
 * ```js
 * import { tailwindPreset } from "@meetpaul/tokens/preset";
 * ```
 */

export interface TailwindTokenPreset {
  theme: {
    extend: {
      colors: Record<string, string>
      borderRadius: Record<string, string>
      fontFamily: Record<string, string[]>
    }
  }
}

/**
 * Tailwind v3-compatible preset that maps all paul design tokens to
 * Tailwind utilities via CSS variable references.
 *
 * @example
 * ```js
 * // tailwind.config.js
 * import { tailwindPreset } from "@meetpaul/tokens/preset";
 * export default { presets: [tailwindPreset] }
 * ```
 */
export const tailwindPreset: TailwindTokenPreset = {
  theme: {
    extend: {
      colors: {
        background:   'hsl(var(--background))',
        foreground:   'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        } as unknown as string,
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        } as unknown as string,
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        } as unknown as string,
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        } as unknown as string,
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        } as unknown as string,
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        } as unknown as string,
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          text:       'hsl(var(--destructive-text))',
        } as unknown as string,
        border:       'hsl(var(--border))',
        input:        'hsl(var(--input))',
        ring:         'hsl(var(--ring))',
        'chart-1':    'hsl(var(--chart-1))',
        'chart-2':    'hsl(var(--chart-2))',
        'chart-3':    'hsl(var(--chart-3))',
        'chart-4':    'hsl(var(--chart-4))',
        'chart-5':    'hsl(var(--chart-5))',
        sidebar: {
          DEFAULT:            'hsl(var(--sidebar))',
          foreground:         'hsl(var(--sidebar-foreground))',
          primary:            'hsl(var(--sidebar-primary))',
          'primary-foreground':'hsl(var(--sidebar-primary-foreground))',
          accent:             'hsl(var(--sidebar-accent))',
          'accent-foreground':'hsl(var(--sidebar-accent-foreground))',
          border:             'hsl(var(--sidebar-border))',
          ring:               'hsl(var(--sidebar-ring))',
        } as unknown as string,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
}
