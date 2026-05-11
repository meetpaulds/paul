import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * CVA variant config for Badge. Use `badgeVariants` directly when you need
 * badge styling on a non-div element (e.g. an anchor or button).
 *
 * @variant default   - Primary brand colour with high-contrast white text.
 * @variant secondary - Subtle neutral background for low-emphasis labels.
 * @variant destructive - Red background for error states or dangerous actions.
 * @variant outline   - Transparent background with a border; inherits text colour.
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Visual style variant of the badge. @default 'default' */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

/**
 * Badge — a small inline label used to highlight status, category, or metadata.
 *
 * @example
 * ```tsx
 * <Badge>New</Badge>
 * <Badge variant="destructive">Error</Badge>
 * <Badge variant="outline">Draft</Badge>
 * ```
 *
 * @accessibility Badges are rendered as `<div>` elements. If the badge conveys
 * meaningful status information (e.g. "3 unread"), wrap it with an
 * `aria-label` on the parent or use `role="status"` with a visually-hidden
 * description for screen readers.
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
