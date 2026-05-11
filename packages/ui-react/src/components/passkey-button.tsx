import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PasskeyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual state of the passkey authentication attempt. */
  status?: 'idle' | 'pending' | 'success' | 'unsupported' | 'error'
  /** Override the status announcement read to screen readers. */
  statusMessage?: string
  /** Label for the button. @default 'Sign in with passkey' */
  label?: string
}

/**
 * Passkey / WebAuthn — biometric authentication button pattern.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No knowledge-based challenge; uses platform authenticator.
 * - `aria-live` region announces result to screen readers.
 * - Falls back gracefully when WebAuthn is unsupported.
 * - 44×44 px minimum touch target.
 *
 * @example
 * ```tsx
 * <PasskeyButton
 *   status={status}
 *   onClick={handlePasskeyAuth}
 * />
 * ```
 *
 * @accessibility
 * Connect the click handler to `navigator.credentials.get({ publicKey })`.
 * The `status` prop drives the `aria-live` announcement automatically.
 */
const PasskeyButton = React.forwardRef<HTMLButtonElement, PasskeyButtonProps>(
  ({ status = 'idle', statusMessage, label = 'Sign in with passkey', className, ...props }, ref) => {
    const isPending = status === 'pending'
    const isUnsupported = status === 'unsupported'

    const defaultMessages: Record<string, string> = {
      pending: 'Authenticating with passkey…',
      success: 'Authentication successful.',
      error: 'Authentication failed. Please try again.',
      unsupported: 'Passkeys are not supported on this device.',
    }
    const message = statusMessage ?? defaultMessages[status] ?? ''

    return (
      <div className="flex flex-col items-start gap-2">
        <button
          ref={ref}
          type="button"
          disabled={isPending || isUnsupported}
          aria-describedby="passkey-status"
          aria-busy={isPending}
          className={cn(
            'inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
            className
          )}
          {...props}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
            <path d="M17 14l1.5 1.5L21 13" />
          </svg>
          {isPending ? 'Authenticating…' : label}
        </button>
        <div
          id="passkey-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={cn(
            'text-sm',
            status === 'success' && 'text-green-600 dark:text-green-400',
            (status === 'error' || status === 'unsupported') && 'text-destructive',
            !message && 'sr-only'
          )}
        >
          {message}
        </div>
      </div>
    )
  }
)
PasskeyButton.displayName = 'PasskeyButton'

export { PasskeyButton }
