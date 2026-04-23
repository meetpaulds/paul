<script setup lang="ts">
import { Toggle, type ToggleProps as RadixToggleProps } from 'radix-vue'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
const toggleVariants = cva('inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground', {
  variants: {
    variant: { default: 'bg-transparent', outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground' },
    size: { default: 'h-9 px-3', sm: 'h-8 px-2', lg: 'h-10 px-3' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})
interface ToggleProps extends /* @vue-ignore */ RadixToggleProps {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  class?: string
}
/**
 * Toggle — a two-state button that can be pressed (on) or unpressed (off).
 *
 * @example
 * ```vue
 * <Toggle aria-label="Bold" v-model:pressed="isBold">
 *   <Bold class="h-4 w-4" />
 * </Toggle>
 * ```
 *
 * @accessibility Reports `aria-pressed` state. Always provide an `aria-label` for icon-only toggles.
 */
defineOptions({ name: 'Toggle' })
const props = defineProps<ToggleProps>()
</script>
<template><Toggle v-bind="props" :class="cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)"><slot /></Toggle></template>