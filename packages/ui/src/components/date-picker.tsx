import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover'

interface DatePickerProps {
  /** The currently selected date (controlled). */
  date?: Date
  /** Callback fired when the user selects or clears a date. */
  onSelect: (date: Date | undefined) => void
  /** Placeholder text shown in the trigger when no date is selected. @default 'Pick a date' */
  placeholder?: string
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
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            onSelect(selectedDate)
            setOpen(false)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
