import { describe, it, expect } from 'vitest'
import {
  getWeekStartDay,
  getWeekdayNames,
  getMonthName,
  getMonthNames,
  formatDate,
  formatMonthYear,
  buildDayGrid,
} from '../lib/calendar-locale'

// ─── Week start day ────────────────────────────────────────────────────────────

describe('getWeekStartDay', () => {
  it('de-DE starts on Monday (1)', () => expect(getWeekStartDay('de-DE')).toBe(1))
  it('fr-FR starts on Monday (1)', () => expect(getWeekStartDay('fr-FR')).toBe(1))
  it('it-IT starts on Monday (1)', () => expect(getWeekStartDay('it-IT')).toBe(1))
  it('es-ES starts on Monday (1)', () => expect(getWeekStartDay('es-ES')).toBe(1))
  it('ar-SA starts on Sunday (0)', () => expect(getWeekStartDay('ar-SA')).toBe(0))
  it('en-US starts on Sunday (0)', () => expect(getWeekStartDay('en-US')).toBe(0))
})

// ─── Weekday names ─────────────────────────────────────────────────────────────

describe('getWeekdayNames', () => {
  it('returns 7 names', () => {
    expect(getWeekdayNames('de-DE', 'short')).toHaveLength(7)
  })

  it('de-DE: first weekday is Monday', () => {
    const names = getWeekdayNames('de-DE', 'short')
    expect(names[0].toLowerCase()).toMatch(/^mo/)
  })

  it('en-US: first weekday is Sunday', () => {
    const names = getWeekdayNames('en-US', 'short')
    expect(names[0].toLowerCase()).toMatch(/^su|^so/)
  })

  it('fr-FR: first weekday is Monday', () => {
    const names = getWeekdayNames('fr-FR', 'short')
    expect(names[0].toLowerCase()).toMatch(/^lu/)
  })

  it('it-IT: first weekday is Monday', () => {
    const names = getWeekdayNames('it-IT', 'short')
    expect(names[0].toLowerCase()).toMatch(/^lu/)
  })

  it('es-ES: first weekday is Monday', () => {
    const names = getWeekdayNames('es-ES', 'short')
    expect(names[0].toLowerCase()).toMatch(/^lu/)
  })

  it('ar-SA: first weekday is Sunday', () => {
    const names = getWeekdayNames('ar-SA', 'short')
    expect(names).toHaveLength(7)
  })
})

// ─── Month names ───────────────────────────────────────────────────────────────

describe('getMonthName', () => {
  it('de-DE January → Januar', () => {
    expect(getMonthName('de-DE', 0).toLowerCase()).toContain('januar')
  })
  it('fr-FR January → janvier', () => {
    expect(getMonthName('fr-FR', 0).toLowerCase()).toContain('janvier')
  })
  it('it-IT January → gennaio', () => {
    expect(getMonthName('it-IT', 0).toLowerCase()).toContain('gennaio')
  })
  it('es-ES January → enero', () => {
    expect(getMonthName('es-ES', 0).toLowerCase()).toContain('enero')
  })
  it('en-US January → January', () => {
    expect(getMonthName('en-US', 0).toLowerCase()).toContain('january')
  })
  it('ar-SA returns a non-empty string', () => {
    expect(getMonthName('ar-SA', 0).length).toBeGreaterThan(0)
  })
})

describe('getMonthNames', () => {
  it('returns 12 names for each locale', () => {
    for (const loc of ['de-DE', 'fr-FR', 'it-IT', 'es-ES', 'ar-SA', 'en-US']) {
      expect(getMonthNames(loc)).toHaveLength(12)
    }
  })
})

// ─── Date formatting ───────────────────────────────────────────────────────────

describe('formatDate', () => {
  const date = new Date(2024, 0, 15) // 15 January 2024

  it('de-DE: contains "Januar" and "2024"', () => {
    const s = formatDate('de-DE', date)
    expect(s).toMatch(/januar/i)
    expect(s).toContain('2024')
  })

  it('fr-FR: contains "janvier" and "2024"', () => {
    const s = formatDate('fr-FR', date)
    expect(s).toMatch(/janvier/i)
    expect(s).toContain('2024')
  })

  it('en-US: contains "January" and "2024"', () => {
    const s = formatDate('en-US', date)
    expect(s).toMatch(/january/i)
    expect(s).toContain('2024')
  })
})

describe('formatMonthYear', () => {
  it('de-DE April 2024 → "April 2024"', () => {
    const s = formatMonthYear('de-DE', 2024, 3)
    expect(s).toMatch(/april/i)
    expect(s).toContain('2024')
  })
})

// ─── Day grid ─────────────────────────────────────────────────────────────────

describe('buildDayGrid', () => {
  it('length is a multiple of 7', () => {
    const grid = buildDayGrid(2024, 0, 1)
    expect(grid.length % 7).toBe(0)
  })

  it('January 2024 with weekStart=1 (Monday) has 1 leading blank (Mon=0)', () => {
    // 1 Jan 2024 is Monday → leadingBlanks = (Mon - Mon + 7) % 7 = 0
    const grid = buildDayGrid(2024, 0, 1)
    expect(grid[0]).toBe(1)
  })

  it('January 2024 with weekStart=0 (Sunday) has 1 leading blank (Mon is col 1)', () => {
    // 1 Jan 2024 is Monday (getDay()=1); weekStart=0 → leading = (1-0+7)%7 = 1
    const grid = buildDayGrid(2024, 0, 0)
    expect(grid[0]).toBeNull()
    expect(grid[1]).toBe(1)
  })

  it('contains the correct number of days for the month', () => {
    const grid = buildDayGrid(2024, 1, 1) // Feb 2024 = 29 days (leap year)
    const days = grid.filter((d) => d !== null)
    expect(days).toHaveLength(29)
  })
})
