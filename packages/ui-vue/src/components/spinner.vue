<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
const spinnerVariants = cva('animate-spin text-muted-foreground', {
  variants: { size: { sm: 'h-4 w-4', default: 'h-6 w-6', lg: 'h-8 w-8', xl: 'h-12 w-12' } },
  defaultVariants: { size: 'default' },
})
interface SpinnerProps {
  size?: 'sm' | 'default' | 'lg' | 'xl'
  class?: string
}
/**
 * Spinner — animated loading indicator.
 *
 * @example
 * ```vue
 * <Spinner />
 * <Spinner size="lg" />
 * ```
 *
 * @accessibility Wrap with `<span role="status" aria-label="Loading">` if conveying load state to screen readers.
 */
defineOptions({ name: 'Spinner' })
const props = defineProps<SpinnerProps>()
</script>
<template><div :class="cn('flex items-center justify-center', props.class)"><Loader2 :class="spinnerVariants({ size: props.size })" /></div></template>