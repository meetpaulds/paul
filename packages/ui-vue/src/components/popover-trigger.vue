<script setup lang="ts">
import { PopoverTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Element that opens the Popover when clicked. Renders its child via `as-child`. */
defineOptions({ name: 'PopoverTrigger' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || PopoverTrigger
</script>
<template><component :is="tag" as-child :class="cn(props.class)"><slot /></component></template>
