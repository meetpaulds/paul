<script setup lang="ts">
import { MenubarRoot, type MenubarRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Menubar — horizontal menu bar with nested dropdown menus, similar to desktop app menus.
 *
 * @example
 * ```vue
 * <Menubar>
 *   <MenubarMenu>
 *     <MenubarTrigger>File</MenubarTrigger>
 *     <MenubarContent>
 *       <MenubarItem>New Tab</MenubarItem>
 *       <MenubarSeparator />
 *       <MenubarItem>Exit</MenubarItem>
 *     </MenubarContent>
 *   </MenubarMenu>
 * </Menubar>
 * ```
 *
 * @accessibility Arrow keys navigate between menus and items. Escape closes submenus.
 */
defineOptions({ name: 'Menubar' })
const props = defineProps<{ class?: string }>()
</script>
<template><MenubarRoot v-bind="props" :class="cn('flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm', props.class)"><slot /></MenubarRoot></template>