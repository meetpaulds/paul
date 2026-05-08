import { cn } from '@/lib/utils'

/** Animated placeholder block used to indicate loading state. Size and shape are controlled via `className`. */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  )
}

export { Skeleton }
