<script setup lang="ts">
import { DropdownMenuItem, type DropdownMenuItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** A single selectable item inside DropdownMenuContent. Use `inset` to indent when mixed with icons. */
defineOptions({ name: 'DropdownMenuItem' })
const props = defineProps<{
  as?: string | any
  class?: string
  inset?: boolean
}>()
const tag = props.as || DropdownMenuItem
</script>
<template><component :is="tag" v-bind="props" :class="cn('relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.inset && 'ps-8', props.class)"><slot /></component></template>
