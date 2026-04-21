<script setup lang="ts">
import { ProgressRoot, ProgressIndicator, type ProgressRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Progress — linear progress bar indicating completion of an operation.
 *
 * @example
 * ```vue
 * <Progress :model-value="75" />
 * ```
 *
 * @accessibility Backed by Radix Vue ProgressRoot which sets `role="progressbar"` and
 * `aria-valuenow` automatically.
 */
defineOptions({ name: 'Progress' })
const props = defineProps<{ modelValue?: number; max?: number; class?: string }>()
</script>
<template>
  <ProgressRoot v-bind="props" :class="cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', props.class)">
    <ProgressIndicator class="h-full w-full flex-1 bg-primary transition-all" :style="{ transform: `translateX(-${100 - (props.modelValue ?? 0)}%)` }" />
  </ProgressRoot>
</template>