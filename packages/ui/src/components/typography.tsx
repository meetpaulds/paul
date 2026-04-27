import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-s-2 ps-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      list: 'my-6 ms-6 list-disc [&>li]:mt-2',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

const variantElementMap: Record<string, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  code: 'code',
  lead: 'p',
  large: 'p',
  small: 'small',
  muted: 'p',
  list: 'ul',
}

type TypographyProps = {
  /** Visual/semantic style variant to apply. @default 'p' */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted' | 'list'
  /** When true, renders the child element as the root via Radix Slot. */
  asChild?: boolean
} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants>

/**
 * Typography — renders styled text with semantic HTML automatically chosen per variant.
 *
 * The `variant` prop controls both the visual style and the rendered element
 * (e.g. `h1` → `<h1>`, `list` → `<ul>`, `lead` → `<p>`). Use `asChild` to
 * render any custom element while keeping the variant's styles.
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Page Title</Typography>
 * <Typography variant="muted">Helper text</Typography>
 * <Typography variant="h2" asChild><a href="/about">About</a></Typography>
 * ```
 */
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'p', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (variantElementMap[variant] ?? 'p') as any
    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
