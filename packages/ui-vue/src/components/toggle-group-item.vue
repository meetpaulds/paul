<script setup lang="ts">
import { ToggleGroupItem as RadixToggleGroupItem, type ToggleGroupItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Individual toggle button inside a ToggleGroup. Requires a unique `value` prop. */
defineOptions({ name: 'ToggleGroupItem' })
const props = defineProps<{
  as?: string | any
  value: string
  class?: string
  disabled?: boolean
}>()
const tag = props.as || RadixToggleGroupItem
</script>
<template><component :is="tag" v-bind="props" :class="cn('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-3', props.class)"><slot /></component></template>
