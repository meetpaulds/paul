import * as React from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/calendar-locale'
import { Button } from './button'
import { Calendar as CalendarBase } from './calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Calendar = CalendarBase as React.ComponentType<any>

interface DatePickerProps {
  /** The currently selected date (controlled). */
  date?: Date
  /** Callback fired when the user selects or clears a date. */
  onSelect: (date: Date | undefined) => void
  /** Placeholder text shown in the trigger when no date is selected. @default 'Pick a date' */
  placeholder?: string
  /** BCP 47 locale string, e.g. 'de-DE', 'ar-SA'. Defaults to the browser locale. */
  locale?: string
  /** Additional CSS classes applied to the trigger button. */
  className?: string
}

/**
 * DatePicker — a controlled date selection input built on `Calendar` + `Popover`.
 *
 * @example
 * ```tsx
 * const [date, setDate] = React.useState<Date>()
 * <DatePicker date={date} onSelect={setDate} placeholder="Pick a date" />
 * ```
 */
export function DatePicker({
  date,
  onSelect,
  placeholder = 'Pick a date',
  locale,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const resolvedLocale = locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-start font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="me-2 h-4 w-4" />
          {date ? formatDate(resolvedLocale, date) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate: Date | undefined) => {
            onSelect(selectedDate)
            setOpen(false)
          }}
          locale={resolvedLocale}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
