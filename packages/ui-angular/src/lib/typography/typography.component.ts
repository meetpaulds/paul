import { Directive, Input, HostBinding } from '@angular/core'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
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
  defaultVariants: { variant: 'p' },
})

/**
 * Typography — semantic text elements with consistent heading and body styling.
 *
 * @example
 * ```html
 * <p paul-typography variant="h1">The Joke Tax Chronicles</p>
 * <p paul-typography variant="lead">A tale of taxes.</p>
 * <p paul-typography>Once upon a time...</p>
 * ```
 */
@Directive({
  selector: '[paul-typography]',
  standalone: true,
})
export class TypographyDirective {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted' | 'list' = 'p'
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn(typographyVariants({ variant: this.variant }), this.class)
  }
}
