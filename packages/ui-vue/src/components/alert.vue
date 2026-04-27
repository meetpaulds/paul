<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

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
  variant?: 'default' | 'destructive'
  class?: string
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
 *
 * @accessibility Uses `role="alert"` so screen readers announce changes immediately.
 */
defineOptions({ name: 'Alert' })
const props = defineProps<AlertProps>()
</script>

<template>
  <div role="alert" :class="cn(alertVariants({ variant: props.variant }), props.class)">
    <slot />
  </div>
</template>
