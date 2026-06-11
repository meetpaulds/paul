<script setup lang="ts">
import { DropdownMenuTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Trigger element that opens the DropdownMenu. Renders its child via `as-child`. */
defineOptions({ name: 'DropdownMenuTrigger' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DropdownMenuTrigger
</script>
<template><component :is="tag" as-child :class="cn(props.class)"><slot /></component></template>
