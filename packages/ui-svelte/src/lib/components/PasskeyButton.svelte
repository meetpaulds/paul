<script lang="ts">
  /**
   * Passkey / WebAuthn — biometric authentication button pattern.
   *
   * WCAG 3.3.8 / EAA Art. 4 compliant:
   * - No knowledge-based challenge; uses platform authenticator.
   * - `aria-live` region announces result to screen readers.
   * - Falls back gracefully when WebAuthn is unsupported.
   */
  type Status = 'idle' | 'pending' | 'success' | 'unsupported' | 'error'

  let {
    status = 'idle' as Status,
    statusMessage = '',
    label = 'Sign in with passkey',
    class: className = '',
    onclick: onclickProp,
    ...rest
  } = $props<{
    status?: Status
    statusMessage?: string
    label?: string
    class?: string
    onclick?: () => void
  }>()

  const defaultMessages: Record<string, string> = {
    pending: 'Authenticating with passkey…',
    success: 'Authentication successful.',
    error: 'Authentication failed. Please try again.',
    unsupported: 'Passkeys are not supported on this device.',
  }

  $derived: const message = statusMessage || defaultMessages[status] || ''
  $derived: const isPending = status === 'pending'
  $derived: const isUnsupported = status === 'unsupported'
</script>

<div class="flex flex-col items-start gap-2">
  <button
    type="button"
    disabled={isPending || isUnsupported}
    aria-describedby="passkey-status"
    aria-busy={isPending}
    class={[
      'inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      className,
    ].join(' ')}
    onclick={onclickProp}
    {...rest}
  >
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    class={[
      'text-sm',
      status === 'success' ? 'text-green-600 dark:text-green-400' : '',
      (status === 'error' || status === 'unsupported') ? 'text-destructive' : '',
      !message ? 'sr-only' : '',
    ].join(' ')}
  >
    {message}
  </div>
</div>
