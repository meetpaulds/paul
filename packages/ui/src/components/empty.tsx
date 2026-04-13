import * as React from 'react'
import { cn } from '@/lib/utils'

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title?: string
  description?: string
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
