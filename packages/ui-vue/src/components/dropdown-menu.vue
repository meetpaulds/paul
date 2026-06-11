<script setup lang="ts">
import { DropdownMenuRoot, type DropdownMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
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
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DropdownMenuRoot
</script>
<template><component :is="tag" v-bind="props" :class="cn(props.class)"><slot /></component></template>
