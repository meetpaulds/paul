import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Calendar, DatePicker } from '@meetpaul/ui'

const LOCALES = ['en-US', 'de-DE', 'fr-FR', 'it-IT', 'es-ES', 'ar-SA'] as const
type SupportedLocale = typeof LOCALES[number]

interface LocaleArg { locale?: SupportedLocale }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Date & Time/Calendar',
  component: Calendar,
  argTypes: {
    locale: {
      control: 'select',
      options: LOCALES,
      description: 'BCP 47 locale — controls month names, weekday headers, and week-start day',
    },
  },
  parameters: {
    layout: 'centered',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<LocaleArg & Record<string, unknown>>

function CalendarDemo({ locale }: { locale?: string }) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cal = Calendar as React.ComponentType<any>
  return <Cal mode="single" selected={date} onSelect={(d: Date | undefined) => setDate(d)} locale={locale} className="rounded-md border" />
}

export const Default: Story = {
  args: { locale: 'en-US' },
  render: (args) => <CalendarDemo locale={args.locale} />,
}

export const Dark: Story = {
  args: { locale: 'en-US' },
  render: (args) => <CalendarDemo locale={args.locale} />,
  globals: { theme: 'dark' },
}

export const German: Story = {
  name: 'de-DE — Monday start, German month/day names',
  render: () => <CalendarDemo locale="de-DE" />,
}

export const French: Story = {
  name: 'fr-FR — Monday start, French month/day names',
  render: () => <CalendarDemo locale="fr-FR" />,
}

export const Italian: Story = {
  name: 'it-IT — Monday start, Italian month/day names',
  render: () => <CalendarDemo locale="it-IT" />,
}

export const Spanish: Story = {
  name: 'es-ES — Monday start, Spanish month/day names',
  render: () => <CalendarDemo locale="es-ES" />,
}

export const ArabicRTL: Story = {
  name: 'ar-SA — Arabic (RTL), Sunday start',
  parameters: { docs: { description: { story: 'Right-to-left locale. Calendar grid starts on Sunday per Saudi locale convention.' } } },
  render: () => (
    <div dir="rtl">
      <CalendarDemo locale="ar-SA" />
    </div>
  ),
}

export const LocaleSwitcher: Story = {
  name: 'Interactive locale switcher',
  parameters: { docs: { description: { story: 'Click a locale button to switch month names, weekday headers, and week-start day in real time.' } } },
  args: { locale: 'en-US' },
  render: (args) => {
    const [locale, setLocale] = React.useState<SupportedLocale>(args.locale ?? 'en-US')
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={`px-3 py-1 rounded-md text-xs font-medium border ${
                locale === l ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <CalendarDemo locale={locale} />
      </div>
    )
  },
}

// ─── DatePicker locale stories ────────────────────────────────────────────────

export const DatePickerDefault: Story = {
  name: 'DatePicker — en-US',
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DP = DatePicker as React.ComponentType<any>
    return <DP date={date} onSelect={setDate} locale="en-US" />
  },
}

export const DatePickerGerman: Story = {
  name: 'DatePicker — de-DE',
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DP = DatePicker as React.ComponentType<any>
    return <DP date={date} onSelect={setDate} locale="de-DE" />
  },
}

export const DatePickerArabic: Story = {
  name: 'DatePicker — ar-SA (RTL)',
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DP = DatePicker as React.ComponentType<any>
    return (
      <div dir="rtl">
        <DP date={date} onSelect={setDate} locale="ar-SA" />
      </div>
    )
  },
}
