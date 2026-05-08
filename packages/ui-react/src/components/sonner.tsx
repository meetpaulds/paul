import { Toaster as Sonner } from 'sonner'
import { cn } from '@/lib/utils'

type ToasterProps = React.ComponentProps<typeof Sonner>

/**
 * Styled toast notification container wrapping the `sonner` Toaster.
 * Mount once at the app root. Trigger toasts with `toast()` from 'sonner'.
 * Accepts all [sonner Toaster props](https://sonner.emilkowal.ski/getting-started) including `position`, `richColors`, `expand`, and `duration`.
 */
const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn('toaster group', className)}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
