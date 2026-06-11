<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template><component :is="tag" :class="cn('max-h-[300px] overflow-y-auto overflow-x-hidden', props.class)"><slot /></component></template>
