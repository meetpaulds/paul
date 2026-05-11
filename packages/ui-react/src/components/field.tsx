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
        {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<{ id?: string }>, { id })}
        {error && <p className="text-sm text-destructive-text">{error}</p>}
        {hint && !error && <p className="text-sm text-muted-foreground">{hint}</p>}
      </div>
    )
  }
)
Field.displayName = 'Field'

export interface FieldHelpProps extends React.HTMLAttributes<HTMLDivElement> {
  /** URL to link to for more detailed help. */
  href?: string
  /** Link text when href is provided. @default 'Learn more' */
  linkText?: string
}

/**
 * FieldHelp — context-sensitive help for a form field.
 *
 * Renders an info icon with descriptive help text and an optional link to
 * more detailed documentation. Use inside a `Field` component below the input.
 *
 * @example
 * ```tsx
 * <Field label="Password" required>
 *   <Input type="password" />
 *   <FieldHelp href="/docs/password-requirements" linkText="View requirements">
 *     Must be at least 8 characters with one uppercase letter and one number.
 *   </FieldHelp>
 * </Field>
 * ```
 *
 * @accessibility Satisfies WCAG 3.3.5 / EN 301 549 §9.3.3.5 — Help.
 */
const FieldHelp = React.forwardRef<HTMLDivElement, FieldHelpProps>(
  ({ className, href, linkText = 'Learn more', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-start gap-2 text-sm text-muted-foreground', className)}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <span>
          {children}
          {href && (
            <>
              {' '}
              <a
                href={href}
                className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkText}
              </a>
            </>
          )}
        </span>
      </div>
    )
  }
)
FieldHelp.displayName = 'FieldHelp'

export { Field, FieldHelp }
