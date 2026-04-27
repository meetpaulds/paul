<script setup lang="ts">
import { ContextMenuRoot } from 'radix-vue'
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
</script>
<template><ContextMenuRoot><slot /></ContextMenuRoot></template>