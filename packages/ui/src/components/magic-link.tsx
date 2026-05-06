import * as React from 'react'
import { cn } from '@/lib/utils'

type MagicLinkStatus = 'idle' | 'sending' | 'sent' | 'error'

export interface MagicLinkProps {
  /** Called with the email value when the form is submitted. */
  onSubmit?: (email: string) => void | Promise<void>
  /** Current status — controls the live-region announcement. */
  status?: MagicLinkStatus
  /** Override the status message shown to users. */
  statusMessage?: string
  className?: string
}

const statusMessages: Record<MagicLinkStatus, string> = {
  idle: '',
  sending: 'Sending magic link…',
  sent: 'Magic link sent! Check your inbox.',
  error: 'Something went wrong. Please try again.',
}

/**
 * Magic Link — password-free email authentication pattern.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No cognitive test (CAPTCHA-free).
 * - `aria-live="polite"` announces status changes to screen readers.
 * - `autocomplete="email"` enables autofill.
 * - Disabled state prevents duplicate submissions.
 *
 * @example
 * ```tsx
 * <MagicLink onSubmit={sendMagicLink} status={status} />
 * ```
 */
const MagicLink = React.forwardRef<HTMLFormElement, MagicLinkProps>(
  ({ onSubmit, status = 'idle', statusMessage, className, ...props }, ref) => {
    const [email, setEmail] = React.useState('')
    const isBusy = status === 'sending'

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (isBusy || !email) return
      await onSubmit?.(email)
    }

    const message = statusMessage ?? statusMessages[status]

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn('flex flex-col gap-3', className)}
        noValidate
        {...props}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="magic-link-email" className="text-sm font-medium leading-none">
            Email address
          </label>
          <input
            id="magic-link-email"
            type="email"
            autoComplete="email"
            required
            disabled={isBusy}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-describedby="magic-link-status"
            className={cn(
              'flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
            )}
          />
        </div>
        <button
          type="submit"
          disabled={isBusy || !email}
          className={cn(
            'inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
          )}
        >
          {isBusy ? 'Sending…' : 'Send magic link'}
        </button>
        <div
          id="magic-link-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={cn(
            'text-sm',
            status === 'sent' && 'text-green-600 dark:text-green-400',
            status === 'error' && 'text-destructive',
            !message && 'sr-only'
          )}
        >
          {message}
        </div>
      </form>
    )
  }
)
MagicLink.displayName = 'MagicLink'

export { MagicLink }
export type { MagicLinkStatus }
