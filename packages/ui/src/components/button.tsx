import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * CVA variant config for Button. Use `buttonVariants` directly when you need
 * button styling on a non-button element without the `asChild` pattern.
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
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        'destructive-outline':
          'border border-destructive/50 text-destructive-text bg-background shadow-sm hover:bg-destructive/10',
        'destructive-ghost': 'text-destructive-text hover:bg-destructive/10',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** When true, renders the button's child as the root element via Radix Slot. */
  asChild?: boolean
}

/**
 * Button — the primary interactive element for triggering actions.
 *
 * Supports 8 visual variants and 4 sizes. Use `asChild` to compose with
 * router links or other custom elements while keeping button styling.
 *
 * @example
 * ```tsx
 * <Button>Save</Button>
 * <Button variant="destructive" size="sm">Delete</Button>
 * <Button variant="destructive-outline">Remove</Button>
 * <Button asChild><a href="/dashboard">Go to Dashboard</a></Button>
 * ```
 *
 * @accessibility Always provide a descriptive label. For icon-only buttons,
 * add `aria-label`. Disabled buttons retain `disabled` attribute so they
 * remain discoverable by assistive technology.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
