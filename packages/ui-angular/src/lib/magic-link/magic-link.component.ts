import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

export type MagicLinkStatus = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Magic Link — password-free email authentication pattern.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No cognitive test (CAPTCHA-free).
 * - `aria-live="polite"` announces status changes to screen readers.
 * - `autocomplete="email"` enables autofill.
 *
 * @example
 * ```html
 * <paul-magic-link [status]="status" (submitEmail)="sendMagicLink($event)" />
 * ```
 */
@Component({
  selector: 'paul-magic-link',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="flex flex-col gap-3" novalidate (ngSubmit)="handleSubmit()">
      <div class="flex flex-col gap-1.5">
        <label for="magic-link-email" class="text-sm font-medium leading-none">
          Email address
        </label>
        <input
          id="magic-link-email"
          type="email"
          autocomplete="email"
          required
          [disabled]="isBusy"
          [(ngModel)]="email"
          name="email"
          placeholder="you@example.com"
          aria-describedby="magic-link-status"
          class="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        [disabled]="isBusy || !email"
        class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        {{ isBusy ? 'Sending…' : 'Send magic link' }}
      </button>
      <div
        id="magic-link-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        [class]="statusClass"
      >
        {{ message }}
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagicLinkComponent {
  @Input() status: MagicLinkStatus = 'idle'
  @Input() statusMessage = ''
  @Output() submitEmail = new EventEmitter<string>()

  email = ''

  private readonly messages: Record<MagicLinkStatus, string> = {
    idle: '',
    sending: 'Sending magic link…',
    sent: 'Magic link sent! Check your inbox.',
    error: 'Something went wrong. Please try again.',
  }

  get isBusy() { return this.status === 'sending' }
  get message() { return this.statusMessage || this.messages[this.status] || '' }
  get statusClass() {
    return [
      'text-sm',
      this.status === 'sent' ? 'text-green-600' : '',
      this.status === 'error' ? 'text-destructive' : '',
      !this.message ? 'sr-only' : '',
    ].join(' ')
  }

  handleSubmit() {
    if (this.isBusy || !this.email) return
    this.submitEmail.emit(this.email)
  }
}
