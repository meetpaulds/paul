import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * CVA variant config for SpinnerComponent.
 *
 * @variant sm  - 16×16px; for inline or compact contexts.
 * @variant default - 24×24px; standard loading indicator.
 * @variant lg  - 32×32px; for section-level loading states.
 * @variant xl  - 48×48px; for full-page loading overlays.
 */
const spinnerVariants = cva('animate-spin text-muted-foreground', {
  variants: { size: { sm: 'h-4 w-4', default: 'h-6 w-6', lg: 'h-8 w-8', xl: 'h-12 w-12' } },
  defaultVariants: { size: 'default' },
})

/**
 * Spinner — animated loading indicator.
 *
 * @example
 * ```html
 * <paul-spinner />
 * <paul-spinner size="lg" />
 * ```
 */
@Component({
  selector: 'paul-spinner',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      [class]="iconClass"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() size: 'sm' | 'default' | 'lg' | 'xl' = 'default'
  @Input() class = ''
  get iconClass() { return cn(spinnerVariants({ size: this.size }), this.class) }
  @HostBinding('class') hostClass = 'flex items-center justify-center'
}
