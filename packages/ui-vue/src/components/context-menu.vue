<script setup lang="ts">
import { ContextMenuRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * ContextMenu — root container for a end-click context menu.
 *
 * @example
 * ```vue
 * <ContextMenu>
 *   <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Cut</ContextMenuItem>
 *     <ContextMenuItem>Copy</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 *
 * @accessibility Opens on end-click or Shift+F10. Arrow keys navigate items.
 */
defineOptions({ name: 'ContextMenu' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || ContextMenuRoot
</script>
<template><component :is="tag" :class="cn(props.class)"><slot /></component></template>
