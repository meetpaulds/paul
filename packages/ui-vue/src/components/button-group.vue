<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * ButtonGroup — renders a horizontal group of buttons with no gap and merged borders.
 *
 * @example
 * ```vue
 * <ButtonGroup>
 *   <Button variant="outline">Left</Button>
 *   <Button variant="outline">Middle</Button>
 *   <Button variant="outline">Right</Button>
 * </ButtonGroup>
 * ```
 */
defineOptions({ name: 'ButtonGroup' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn('flex [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none', props.class)">
    <slot />
  </div>
</template>
