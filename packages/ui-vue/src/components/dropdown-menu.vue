<script setup lang="ts">
import { DropdownMenuRoot, type DropdownMenuRootProps } from 'radix-vue'
/**
 * DropdownMenu — contextual menu triggered by a button.
 *
 * @example
 * ```vue
 * <DropdownMenu>
 *   <DropdownMenuTrigger><Button variant="outline">Open</Button></DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuLabel>My Account</DropdownMenuLabel>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuItem>Profile</DropdownMenuItem>
 *     <DropdownMenuItem>Sign out</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 *
 * @accessibility Opens with Enter/Space/ArrowDown. Arrow keys navigate items. Escape closes.
 */
defineOptions({ name: 'DropdownMenu' })
const props = defineProps<{}>()
</script>
<template><DropdownMenuRoot v-bind="props"><slot /></DropdownMenuRoot></template>