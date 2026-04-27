<script setup lang="ts">
import { MenubarItem, type MenubarItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** A single selectable action inside MenubarContent. Use `inset` to indent when mixed with icons. */
defineOptions({ name: 'MenubarItem' })
const props = defineProps<{ class?: string; inset?: boolean }>()
</script>
<template><MenubarItem v-bind="props" :class="cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.inset && 'ps-8', props.class)"><slot /></MenubarItem></template>