/**
 * calendar-locale.ts
 *
 * Pure Intl-based helpers for Calendar / DatePicker localisation.
 * No external date library dependency — uses the native Intl API only.
 *
 * Supported locale examples: 'de-DE', 'fr-FR', 'it-IT', 'es-ES', 'ar-SA', 'en-US'
 */

/** Returns the 0-indexed week-start day for a locale.
 *  0 = Sunday (US), 1 = Monday (EU), 6 = Saturday (some Arab locales).
 *  Falls back to Sunday when the Intl.Locale weekInfo API is unavailable.
 */
export function getWeekStartDay(locale: string): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
  try {
    // weekInfo is available in modern engines (Chrome 130+, FF 126+, Safari 17.4+)
    // ISO convention: 1=Monday … 7=Sunday. We normalize to 0=Sunday … 6=Saturday.
    const info = (new Intl.Locale(locale) as unknown as { weekInfo?: { firstDay: number } }).weekInfo
    if (info) {
      const fd = info.firstDay % 7 // 7→0 (Sunday), 1-6 stay same
      return fd as 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  } catch {
    // ignore
  }
  // Hardcoded fallback table for the 5 required locales
  const table: Record<string, 0 | 1> = {
    'de-DE': 1, 'de': 1,
    'fr-FR': 1, 'fr': 1,
    'it-IT': 1, 'it': 1,
    'es-ES': 1, 'es': 1,
    'ar-SA': 0, 'ar': 0,
    'en-US': 0, 'en': 0,
  }
  return table[locale] ?? table[locale.split('-')[0]] ?? 0
}

/** Returns the short weekday names ordered from week-start for a locale.
 *  e.g. de-DE → ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
 */
export function getWeekdayNames(locale: string, style: 'short' | 'narrow' = 'short'): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { weekday: style })
  // 2024-01-07 is a Sunday. Build all 7 days starting from that Sunday.
  const sunBasedDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2024, 0, 7 + i) // Sun=0 … Sat=6
    return fmt.format(d)
  })
  const start = getWeekStartDay(locale)
  return [...sunBasedDays.slice(start), ...sunBasedDays.slice(0, start)]
}

/** Returns the full month name for a given 0-indexed month in a locale. */
export function getMonthName(locale: string, monthIndex: number): string {
  return new Intl.DateTimeFormat(locale, { month: 'long' }).format(new Date(2024, monthIndex, 1))
}

/** Returns all 12 month names for a locale. */
export function getMonthNames(locale: string): string[] {
  return Array.from({ length: 12 }, (_, i) => getMonthName(locale, i))
}

/** Formats a Date as a localised date string (e.g. for the DatePicker trigger label). */
export function formatDate(locale: string, date: Date): string {
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

/** Returns month + year caption for the calendar header. */
export function formatMonthYear(locale: string, year: number, month: number): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(year, month, 1))
}

/** Builds the day grid cells (null = blank padding) for a given year/month/locale. */
export function buildDayGrid(year: number, month: number, weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6): (number | null)[] {
  const firstDow = new Date(year, month, 1).getDay() // 0=Sun
  const totalDays = new Date(year, month + 1, 0).getDate()
  const leadingBlanks = ((firstDow - weekStart + 7) % 7)
  const cells: (number | null)[] = Array(leadingBlanks).fill(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}
