/**
 * Typed JS token object for `@meetpaul/tokens`.
 *
 * Values are HSL channel strings (no `hsl()` wrapper) matching the CSS custom
 * properties so they compose cleanly with alpha:
 *   `hsl(${tokens.light.primary} / 0.5)`
 *
 * Use cases:
 * - Runtime theming / CSS-in-JS
 * - Figma Tokens / Style Dictionary pipelines
 * - Unit-testing colour contrast
 * - Seeding `@meetpaul/ui-vue`, `@meetpaul/ui-angular`, etc.
 */

export interface ColorTokens {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  destructiveText: string
  border: string
  input: string
  ring: string
  chart1: string
  chart2: string
  chart3: string
  chart4: string
  chart5: string
  sidebar: string
  sidebarForeground: string
  sidebarPrimary: string
  sidebarPrimaryForeground: string
  sidebarAccent: string
  sidebarAccentForeground: string
  sidebarBorder: string
  sidebarRing: string
}

export interface TypographyTokens {
  fontSans: string
  fontMono: string
}

export interface RadiusTokens {
  radius: string
}

export interface ModeTokens extends ColorTokens, TypographyTokens, RadiusTokens {}

/** Light mode design tokens. */
export const light: ModeTokens = {
  background:                '0 0% 100%',
  foreground:                '240 10% 3.9%',
  card:                      '0 0% 100%',
  cardForeground:            '240 10% 3.9%',
  popover:                   '0 0% 100%',
  popoverForeground:         '240 10% 3.9%',
  primary:                   '240 5.9% 10%',
  primaryForeground:         '0 0% 98%',
  secondary:                 '240 4.8% 95.9%',
  secondaryForeground:       '240 5.9% 10%',
  muted:                     '240 4.8% 95.9%',
  mutedForeground:           '240 5% 38%',
  accent:                    '240 4.8% 95.9%',
  accentForeground:          '240 5.9% 10%',
  destructive:               '0 84.2% 50%',
  destructiveForeground:     '0 0% 100%',
  destructiveText:           '0 72% 44%',
  border:                    '240 5.9% 90%',
  input:                     '240 5.9% 90%',
  ring:                      '240 5.9% 10%',
  radius:                    '0.5rem',
  chart1:                    '12 76% 61%',
  chart2:                    '173 58% 39%',
  chart3:                    '197 37% 24%',
  chart4:                    '43 74% 66%',
  chart5:                    '27 87% 67%',
  sidebar:                   '0 0% 98%',
  sidebarForeground:         '240 5.3% 26.1%',
  sidebarPrimary:            '240 5.9% 10%',
  sidebarPrimaryForeground:  '0 0% 98%',
  sidebarAccent:             '240 4.8% 95.9%',
  sidebarAccentForeground:   '240 5.9% 10%',
  sidebarBorder:             '220 13% 91%',
  sidebarRing:               '240 5.9% 10%',
  fontSans:                  "'Montserrat', ui-sans-serif, system-ui, sans-serif",
  fontMono:                  'ui-monospace, monospace',
}

/** Dark mode design tokens. */
export const dark: ModeTokens = {
  background:                '240 10% 3.9%',
  foreground:                '0 0% 98%',
  card:                      '240 10% 3.9%',
  cardForeground:            '0 0% 98%',
  popover:                   '240 10% 3.9%',
  popoverForeground:         '0 0% 98%',
  primary:                   '0 0% 98%',
  primaryForeground:         '240 5.9% 10%',
  secondary:                 '240 3.7% 15.9%',
  secondaryForeground:       '0 0% 98%',
  muted:                     '240 3.7% 15.9%',
  mutedForeground:           '240 5% 64.9%',
  accent:                    '240 3.7% 15.9%',
  accentForeground:          '0 0% 98%',
  destructive:               '0 62.8% 30.6%',
  destructiveForeground:     '0 0% 100%',
  destructiveText:           '0 90% 65%',
  border:                    '240 3.7% 15.9%',
  input:                     '240 3.7% 15.9%',
  ring:                      '240 4.9% 83.9%',
  radius:                    '0.5rem',
  chart1:                    '220 70% 50%',
  chart2:                    '160 60% 45%',
  chart3:                    '30 80% 55%',
  chart4:                    '280 65% 60%',
  chart5:                    '340 75% 55%',
  sidebar:                   '240 5.9% 10%',
  sidebarForeground:         '240 4.8% 95.9%',
  sidebarPrimary:            '224.3 76.3% 48%',
  sidebarPrimaryForeground:  '0 0% 100%',
  sidebarAccent:             '240 3.7% 15.9%',
  sidebarAccentForeground:   '240 4.8% 95.9%',
  sidebarBorder:             '240 3.7% 15.9%',
  sidebarRing:               '240 4.9% 83.9%',
  fontSans:                  "'Montserrat', ui-sans-serif, system-ui, sans-serif",
  fontMono:                  'ui-monospace, monospace',
}

/** All tokens keyed by mode. */
export const tokens = { light, dark } as const
