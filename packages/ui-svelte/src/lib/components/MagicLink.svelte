<script lang="ts">
  /**
   * Magic Link — password-free email authentication pattern.
   *
   * WCAG 3.3.8 / EAA Art. 4 compliant:
   * - No cognitive test (CAPTCHA-free).
   * - `aria-live="polite"` announces status changes to screen readers.
   * - `autocomplete="email"` enables autofill.
   */
  type Status = 'idle' | 'sending' | 'sent' | 'error'

  let {
    status = 'idle' as Status,
    statusMessage = '',
    class: className = '',
    onsubmit: onsubmitProp,
    ...rest
  } = $props<{
    status?: Status
    statusMessage?: string
    class?: string
    onsubmit?: (email: string) => void
  }>()

  let email = $state('')

  const messages: Record<Status, string> = {
    idle: '',
    sending: 'Sending magic link…',
    sent: 'Magic link sent! Check your inbox.',
    error: 'Something went wrong. Please try again.',
  }

  $derived: const message = statusMessage || messages[status] || ''
  $derived: const isBusy = status === 'sending'

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (isBusy || !email) return
    onsubmitProp?.(email)
  }
</script>

<form
  class={['flex flex-col gap-3', className].join(' ')}
  novalidate
  onsubmit={handleSubmit}
  {...rest}
>
  <div class="flex flex-col gap-1.5">
    <label for="magic-link-email" class="text-sm font-medium leading-none">Email address</label>
    <input
      id="magic-link-email"
      type="email"
      autocomplete="email"
      required
      disabled={isBusy}
      bind:value={email}
      placeholder="you@example.com"
      aria-describedby="magic-link-status"
      class="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
  <button
    type="submit"
    disabled={isBusy || !email}
    class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  >
    {isBusy ? 'Sending…' : 'Send magic link'}
  </button>
  <div
    id="magic-link-status"
    role="status"
    aria-live="polite"
    aria-atomic="true"
    class={[
      'text-sm',
      status === 'sent' ? 'text-green-600 dark:text-green-400' : '',
      status === 'error' ? 'text-destructive' : '',
      !message ? 'sr-only' : '',
    ].join(' ')}
  >
    {message}
  </div>
</form>
