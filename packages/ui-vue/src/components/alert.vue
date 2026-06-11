<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import AlertTitle from './alert-title.vue'
import AlertDescription from './alert-description.vue'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:start-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:ps-7 print:shadow-none print:border-black print:text-black',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive-text dark:border-destructive [&>svg]:text-destructive-text',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

interface AlertProps {
  as?: string
  variant?: 'default' | 'destructive'
  class?: string
  title?: string
  description?: string
}
/**
 * Alert — contextual feedback banner for info, warning, success, or error states.
 *
 * @example
 * ```vue
 * <Alert>
 *   <AlertTitle>Heads up</AlertTitle>
 *   <AlertDescription>You can add components to your app.</AlertDescription>
 * </Alert>
 * <Alert variant="destructive">
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Your session has expired.</AlertDescription>
 * </Alert>
 * ```
 * @example
 * ```vue
 * <Alert title="Heads up" description="You can add components to your app." />
 * ```
 *
 * @accessibility Uses `role="alert"` so screen readers announce changes immediately.
 */
defineOptions({ name: 'Alert' })
const props = defineProps<AlertProps>()
const tag = props.as || 'div'
</script>

<template>
  <component :is="tag" role="alert" :class="cn(alertVariants({ variant: props.variant }), props.class)">
    <slot>
      <AlertTitle v-if="props.title">{{ props.title }}</AlertTitle>
      <AlertDescription v-if="props.description">{{ props.description }}</AlertDescription>
    </slot>
  </component>
</template>
