import * as React from 'react'
import { cn } from '@/lib/utils'

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /** Keyboard key or shortcut text to display (e.g. '⌘K', 'Enter', '⇧'). */
  children?: React.ReactNode
}

/**
 * Kbd — renders a `<kbd>` element styled as a keyboard key badge.
 *
 * @example
 * ```tsx
 * Press <Kbd>⌘K</Kbd> to open the command palette.
 * <Kbd>Enter</Kbd>
 * ```
 */
const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
          className
        )}
        {...props}
      />
    )
  }
)
Kbd.displayName = 'Kbd'

export { Kbd }
