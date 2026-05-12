import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * CVA variant config for ButtonComponent. Use `buttonVariants` directly when you need
 * button styling without the `paul-button` attribute directive.
 *
 * @variant default           - Primary brand colour; the main call-to-action.
 * @variant destructive        - Solid red; for irreversible or dangerous actions.
 * @variant destructive-outline - Red border and text on transparent background; softer destructive emphasis.
 * @variant destructive-ghost  - Red text only, no background; lowest destructive emphasis.
 * @variant outline            - Border with transparent background; secondary actions.
 * @variant secondary          - Neutral muted background; tertiary actions.
 * @variant ghost              - No background or border; icon buttons and toolbars.
 * @variant link               - Looks like a hyperlink with underline on hover.
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 print:shadow-none print:border-black print:text-black',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        'destructive-outline': 'border border-destructive text-destructive-text bg-transparent shadow-sm hover:bg-destructive/10',
        'destructive-ghost': 'text-destructive-text bg-transparent hover:bg-destructive/10',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

/**
 * Button — the primary interactive element for triggering actions.
 *
 * @example
 * ```html
 * <button paul-button>Save</button>
 * <button paul-button variant="destructive" size="sm">Delete</button>
 * <button paul-button variant="outline">Cancel</button>
 * ```
 *
 * @accessibility Always provide a descriptive label. For icon-only buttons, add `aria-label`.
 */
@Component({
  selector: 'button[paul-button], a[paul-button]',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: 'default' | 'destructive' | 'destructive-outline' | 'destructive-ghost' | 'outline' | 'secondary' | 'ghost' | 'link' = 'default'
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default'
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn(buttonVariants({ variant: this.variant, size: this.size }), this.class)
  }
}
