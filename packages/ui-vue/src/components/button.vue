<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 print:shadow-none print:border-black print:text-black',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        'destructive-outline': 'border border-destructive text-destructive-text bg-transparent shadow-sm hover:bg-destructive/10',
        'destructive-ghost': 'text-destructive-text bg-transparent hover:bg-destructive/10',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'destructive-outline' | 'destructive-ghost' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: string
}
/**
 * Button — the primary interactive element for triggering actions.
 *
 * Supports 8 visual variants and 4 sizes.
 *
 * @example
 * ```vue
 * <Button>Save</Button>
 * <Button variant="destructive" size="sm">Delete</Button>
 * <Button variant="outline" :disabled="loading">Cancel</Button>
 * ```
 *
 * @accessibility Always provide a descriptive label. For icon-only buttons, add `aria-label`.
 * Disabled buttons retain the `disabled` attribute so assistive technology can discover them.
 */
defineOptions({ name: 'Button' })
const props = defineProps<ButtonProps>()
</script>

<template>
  <button
    :type="props.type ?? 'button'"
    :disabled="props.disabled"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <slot />
  </button>
</template>
