import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * CVA variant config for BadgeComponent.
 *
 * @variant default     - Primary brand colour with high-contrast white text.
 * @variant secondary   - Subtle neutral background for low-emphasis labels.
 * @variant destructive - Red background for error states or dangerous actions.
 * @variant outline     - Transparent background with a border; inherits text colour.
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 print:shadow-none print:border-black print:text-black',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

/**
 * Badge — a small inline label used to highlight status, category, or metadata.
 *
 * @example
 * ```html
 * <paul-badge>New</paul-badge>
 * <paul-badge variant="destructive">Error</paul-badge>
 * <paul-badge variant="outline">Draft</paul-badge>
 * ```
 */
@Component({
  selector: 'paul-badge',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input() variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'default'
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn(badgeVariants({ variant: this.variant }), this.class)
  }
}
