import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const spinnerVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      default: 'h-4 w-4',
      sm: 'h-2 w-2',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /** Size of the spinner icon. @default 'default' */
  size?: 'sm' | 'default' | 'lg' | 'xl'
  /** When true, renders the child element as the root via Radix Slot. */
  asChild?: boolean
}

/**
 * Spinner — an animated loading indicator using a `Loader2` icon.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" />
 * ```
 *
 * @accessibility Wrap with `role="status"` and a visually-hidden label when used
 * as a standalone loading state: `<span role="status"><Spinner /><span className="sr-only">Loading…</span></span>`
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(spinnerVariants({ size }), className)} {...props}>
        <Loader2 className="h-full w-full" />
      </div>
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
