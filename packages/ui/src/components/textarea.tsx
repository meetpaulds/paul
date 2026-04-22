import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Placeholder text displayed when the textarea is empty. */
  placeholder?: string
  /** When true, prevents user interaction and applies disabled styles. */
  disabled?: boolean
}

/**
 * Textarea — a styled multi-line text input.
 *
 * Supports all native `<textarea>` props.
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Write a message…" rows={4} />
 * ```
 *
 * @accessibility Always pair with a `<Label>` using `htmlFor` / `id`, or use
 * inside a `<Field>` which handles association automatically.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
