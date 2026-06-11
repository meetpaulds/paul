<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'p'
</script>
<template><component :is="tag" :class="cn('text-sm text-muted-foreground', props.class)"><slot /></component></template>
