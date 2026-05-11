import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

interface ComboboxProps {
  /** List of selectable options. Each item requires a unique `value` and a display `label`. */
  options: { value: string; label: string }[]
  /** The currently selected value. */
  value?: string
  /** Callback fired when the selected value changes. Passes an empty string when the selection is cleared. */
  onChange: (value: string) => void
  /** Placeholder text shown in the trigger when no value is selected. @default 'Select option...' */
  placeholder?: string
  /** Message displayed inside the dropdown when no options match the search query. @default 'No results found.' */
  emptyMessage?: string
  /** Additional CSS classes applied to the trigger button. */
  className?: string
}

/**
 * Combobox — a searchable select built on `Command` + `Popover`.
 *
 * @example
 * ```tsx
 * const [value, setValue] = React.useState('')
 * <Combobox
 *   options={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}
 *   value={value}
 *   onChange={setValue}
 *   placeholder="Select framework…"
 * />
 * ```
 */
function Combobox({
  options,
  value,
  onChange,
  placeholder = 'Select option...',
  emptyMessage = 'No results found.',
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={placeholder}
          className={cn('w-[200px] justify-between', className)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
