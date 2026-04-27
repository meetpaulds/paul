import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * CVA variant config for AlertComponent.
 *
 * @variant default     - Neutral background with default foreground text.
 * @variant destructive - Red border and text for error or danger states.
 */
const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7 print:shadow-none print:border-black print:text-black',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive-text dark:border-destructive [&>svg]:text-destructive-text',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

/**
 * Alert — contextual feedback banner for info, warning, success, or error states.
 *
 * @example
 * ```html
 * <paul-alert>
 *   <paul-alert-title>Heads up</paul-alert-title>
 *   <paul-alert-description>You can add components to your app.</paul-alert-description>
 * </paul-alert>
 * <paul-alert variant="destructive">
 *   <paul-alert-title>Error</paul-alert-title>
 *   <paul-alert-description>Your session has expired.</paul-alert-description>
 * </paul-alert>
 * ```
 *
 * @accessibility Uses `role="alert"` so screen readers announce changes immediately.
 */
@Component({
  selector: 'paul-alert',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() variant: 'default' | 'destructive' = 'default'
  @Input() class = ''
  @HostBinding('attr.role') role = 'alert'
  @HostBinding('class') get hostClass() {
    return cn(alertVariants({ variant: this.variant }), this.class)
  }
}
