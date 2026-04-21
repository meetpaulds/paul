<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { computed } from 'vue'
const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
    },
  },
  defaultVariants: { variant: 'p' },
})
const tagMap = { h1:'h1', h2:'h2', h3:'h3', h4:'h4', p:'p', blockquote:'blockquote', code:'code', lead:'p', large:'p', small:'small', muted:'p', list:'ul' } as const
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted' | 'list'
  class?: string
}
/**
 * Typography — semantic text elements with consistent heading and body styling.
 *
 * @example
 * ```vue
 * <Typography variant="h1">The Joke Tax Chronicles</Typography>
 * <Typography variant="lead">A tale of taxes and terrible jokes.</Typography>
 * <Typography variant="p">Once upon a time...</Typography>
 * <Typography variant="muted">Last updated January 1, 2026</Typography>
 * ```
 */
defineOptions({ name: 'Typography' })
const props = defineProps<TypographyProps>()
const tag = computed(() => tagMap[props.variant ?? 'p'] ?? 'p')
</script>
<template><component :is="tag" :class="cn(typographyVariants({ variant: props.variant }), props.class)"><slot /></component></template>