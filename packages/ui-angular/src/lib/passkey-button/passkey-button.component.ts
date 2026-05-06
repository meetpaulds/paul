import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

export type PasskeyStatus = 'idle' | 'pending' | 'success' | 'unsupported' | 'error'

/**
 * Passkey / WebAuthn — biometric authentication button pattern.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No knowledge-based challenge; uses platform authenticator.
 * - `aria-live` region announces result to screen readers.
 * - Falls back gracefully when WebAuthn is unsupported.
 *
 * @example
 * ```html
 * <paul-passkey-button [status]="status" (authenticate)="handlePasskey()" />
 * ```
 */
@Component({
  selector: 'paul-passkey-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-start gap-2">
      <button
        type="button"
        [disabled]="isPending || isUnsupported"
        aria-describedby="passkey-status"
        [attr.aria-busy]="isPending"
        [class]="buttonClass"
        (click)="authenticate.emit()"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
          <path d="M17 14l1.5 1.5L21 13" />
        </svg>
        {{ isPending ? 'Authenticating…' : buttonLabel }}
      </button>
      <div
        id="passkey-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        [class]="statusClass"
      >
        {{ message }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasskeyButtonComponent {
  @Input() status: PasskeyStatus = 'idle'
  @Input() statusMessage = ''
  @Input() label = 'Sign in with passkey'
  @Output() authenticate = new EventEmitter<void>()

  private readonly defaultMessages: Record<string, string> = {
    pending: 'Authenticating with passkey…',
    success: 'Authentication successful.',
    error: 'Authentication failed. Please try again.',
    unsupported: 'Passkeys are not supported on this device.',
  }

  get isPending() { return this.status === 'pending' }
  get isUnsupported() { return this.status === 'unsupported' }
  get buttonLabel() { return this.label }
  get message() { return this.statusMessage || this.defaultMessages[this.status] || '' }

  get buttonClass() {
    return 'inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  }

  get statusClass() {
    return [
      'text-sm',
      this.status === 'success' ? 'text-green-600' : '',
      (this.status === 'error' || this.status === 'unsupported') ? 'text-destructive' : '',
      !this.message ? 'sr-only' : '',
    ].join(' ')
  }
}
