<script setup lang="ts">
import { DialogTitle } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Accessible title for the Dialog. Required for screen reader announcement. */
defineOptions({ name: 'DialogTitle' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DialogTitle
</script>
<template><component :is="tag" :class="cn('text-lg font-semibold leading-none tracking-tight', props.class)"><slot /></component></template>
