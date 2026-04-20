import * as React from 'react'
import { cn } from '@/lib/utils'
import { Label } from './label'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label text rendered above the child input. */
  label?: string
  /** Validation error message. Replaces hint when present. */
  error?: string
  /** Helper text rendered below the child input when there is no error. */
  hint?: string
  /** When true, appends a required asterisk (*) to the label. */
  required?: boolean
  /** The form control element (e.g. Input, Select) to associate with the label. */
  children: React.ReactNode
}

/**
 * Field — a form field wrapper that pairs a `Label`, a form control, and optional
 * hint/error text. Automatically associates the label with the control via a
 * generated `id`.
 *
 * @example
 * ```tsx
 * <Field label="Email" hint="We'll never share your email." required>
 *   <Input type="email" />
 * </Field>
 *
 * <Field label="Username" error="Username is already taken.">
 *   <Input />
 * </Field>
 * ```
 *
 * @accessibility The label is linked to the child control via `htmlFor` / `id`.
 * Required fields get a visible `*` marker; always also set `required` on the
 * underlying input for screen reader support.
 */
const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, error, hint, required, children, ...props }, ref) => {
    const id = React.useId()

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {label && (
          <Label htmlFor={id}>
            {label}
            {required && <span className="text-destructive-text ml-1">*</span>}
          </Label>
        )}
        {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<{ id?: string }>, { id } as any)}
        {error && <p className="text-sm text-destructive-text">{error}</p>}
        {hint && !error && <p className="text-sm text-muted-foreground">{hint}</p>}
      </div>
    )
  }
)
Field.displayName = 'Field'

export { Field }
