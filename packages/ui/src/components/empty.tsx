import * as React from 'react'
import { cn } from '@/lib/utils'

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon element displayed at the top of the empty state. */
  icon?: React.ReactNode
  /** Primary heading text. */
  title?: string
  /** Supporting description text rendered below the title. */
  description?: string
  /** Optional action element (e.g. a Button) rendered below the description. */
  action?: React.ReactNode
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center text-center p-8',
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-muted-foreground max-w-xs mb-4">
            {description}
          </p>
        )}
        {action && <div>{action}</div>}
      </div>
    )
  }
)
Empty.displayName = 'Empty'

export { Empty }
