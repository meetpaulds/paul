<script setup lang="ts">
import { cn } from '@/lib/utils'
/** Primary heading inside an Alert. */
defineOptions({ name: 'AlertTitle' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'h5'
</script>
<template><component :is="tag" :class="cn('mb-1 font-medium leading-none tracking-tight', props.class)"><slot /></component></template>
