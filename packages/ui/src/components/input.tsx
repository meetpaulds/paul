import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** HTML input type. Supports all native values such as 'text', 'email', 'password', 'number', 'file', etc. */
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
}

/**
 * Input — a styled single-line text input.
 *
 * Supports all native `<input>` props. Use `type` to control the input mode
 * (text, email, password, number, file, etc.).
 *
 * @example
 * ```tsx
 * <Input placeholder="Email address" type="email" />
 * <Input type="password" />
 * ```
 *
 * @accessibility Always pair with a `<Label>` using `htmlFor` / `id`, or use
 * inside a `<Field>` which handles association automatically.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
