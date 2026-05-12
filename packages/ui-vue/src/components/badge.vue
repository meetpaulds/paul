<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 print:shadow-none print:border-black print:text-black',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  class?: string
}
/**
 * Badge — a small inline label used to highlight status, category, or metadata.
 *
 * @example
 * ```vue
 * <Badge>New</Badge>
 * <Badge variant="destructive">Error</Badge>
 * <Badge variant="outline">Draft</Badge>
 * ```
 *
 * @accessibility Badges are rendered as `<div>` elements. If the badge conveys
 * meaningful status, wrap it with an `aria-label` on the parent or add `role="status"`.
 */
defineOptions({ name: 'Badge' })
const props = defineProps<BadgeProps>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant: props.variant }), props.class)"><slot /></div>
</template>
