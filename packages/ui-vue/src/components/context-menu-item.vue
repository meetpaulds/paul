<script setup lang="ts">
import { ContextMenuItem, type ContextMenuItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** A single selectable item inside a ContextMenuContent. Use `inset` to indent when mixed with icons. */
defineOptions({ name: 'ContextMenuItem' })
const props = defineProps<{ class?: string; inset?: boolean }>()
</script>
<template><ContextMenuItem v-bind="props" :class="cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.inset && 'pl-8', props.class)"><slot /></ContextMenuItem></template>