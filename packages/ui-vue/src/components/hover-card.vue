<script setup lang="ts">
import { HoverCardRoot, type HoverCardRootProps } from 'radix-vue'
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
const props = defineProps<{}>()
</script>
<template><HoverCardRoot v-bind="props"><slot /></HoverCardRoot></template>