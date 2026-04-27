import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button'
import { getWeekStartDay, formatMonthYear, getWeekdayNames } from '@/lib/calendar-locale'

export type CalendarProps = Omit<React.ComponentProps<typeof DayPicker>, 'locale'> & {
  /** BCP 47 locale string, e.g. 'de-DE', 'ar-SA'. Defaults to the browser locale. */
  locale?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DayPickerAny = DayPicker as React.ComponentType<any>

/**
 * Date picker calendar built on `react-day-picker`.
 * Key props: `mode` ('single' | 'multiple' | 'range'), `selected`, `onSelect`, `disabled`, `initialFocus`.
 * Accepts all `DayPicker` props.
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  locale,
  ...props
}: CalendarProps) {
  const resolvedLocale = locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')
  const weekStart = getWeekStartDay(resolvedLocale)
  const weekdayNames = getWeekdayNames(resolvedLocale, 'short')

  return (
    <DayPickerAny
      showOutsideDays={showOutsideDays}
      weekStartsOn={weekStart}
      formatters={{
        formatCaption: (date: Date) => formatMonthYear(resolvedLocale, date.getFullYear(), date.getMonth()),
        formatWeekdayName: (date: Date) => weekdayNames[(date.getDay() - weekStart + 7) % 7] ?? '',
      }}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'gap-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-11 w-11 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute start-1',
        nav_button_next: 'absolute end-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-s-md last:[&:has([aria-selected])]:rounded-e-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-11 w-11 p-0 font-normal aria-selected:opacity-100'
        ),
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

// Re-export DayPickerAny reference is only internal — public type is CalendarProps above
Calendar.displayName = 'Calendar'

export { Calendar }
