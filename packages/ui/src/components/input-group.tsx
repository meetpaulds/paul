import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputGroupVariants = cva(
  'flex items-center w-full',
  {
    variants: {
      size: {
        default: 'h-10',
        sm: 'h-8',
        lg: 'h-12',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(inputGroupVariants({ size }), className)}
        {...props}
      />
    )
  }
)
InputGroup.displayName = 'InputGroup'

const InputGroupText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center px-3 text-sm text-muted-foreground bg-muted border-y border-l rounded-l-md',
        className
      )}
      {...props}
    />
  )
})
InputGroupText.displayName = 'InputGroupText'

export { InputGroup, InputGroupText }
