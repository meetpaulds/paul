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

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, error, hint, required, children, ...props }, ref) => {
    const id = React.useId()

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {label && (
          <Label htmlFor={id}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<{ id?: string }>, { id } as any)}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {hint && !error && <p className="text-sm text-muted-foreground">{hint}</p>}
      </div>
    )
  }
)
Field.displayName = 'Field'

export { Field }
