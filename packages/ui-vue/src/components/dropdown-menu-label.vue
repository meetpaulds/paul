<script setup lang="ts">
import { DropdownMenuLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Non-interactive group label inside DropdownMenuContent. */
defineOptions({ name: 'DropdownMenuLabel' })
const props = defineProps<{
  as?: string | any
  class?: string
  inset?: boolean
}>()
const tag = props.as || DropdownMenuLabel
</script>
<template><component :is="tag" :class="cn('px-2 py-1.5 text-xs font-semibold', props.inset && 'ps-8', props.class)"><slot /></component></template>
