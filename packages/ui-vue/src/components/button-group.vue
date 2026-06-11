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
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>

<template>
  <component :is="tag" :class="cn('flex [&>*:not(:first-child)]:-ms-px [&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none', props.class)">
    <slot />
  </component>
</template>
