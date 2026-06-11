<script setup lang="ts">
import { HoverCardTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Element that reveals the HoverCard on hover. Renders its child via `as-child`. */
defineOptions({ name: 'HoverCardTrigger' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || HoverCardTrigger
</script>
<template><component :is="tag" as-child :class="cn(props.class)"><slot /></component></template>
