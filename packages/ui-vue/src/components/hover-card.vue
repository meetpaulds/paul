<script setup lang="ts">
import { HoverCardRoot, type HoverCardRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * HoverCard — rich tooltip-style card that appears when hovering a trigger element.
 *
 * @example
 * ```vue
 * <HoverCard>
 *   <HoverCardTrigger><a href="#">@meetpaul</a></HoverCardTrigger>
 *   <HoverCardContent>
 *     <p>Design system by SirPauls</p>
 *   </HoverCardContent>
 * </HoverCard>
 * ```
 */
defineOptions({ name: 'HoverCard' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || HoverCardRoot
</script>
<template><component :is="tag" v-bind="props" :class="cn(props.class)"><slot /></component></template>
