<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'h2'
</script>
<template>
  <component :is="tag" :class="cn('text-lg font-semibold text-foreground', props.class)"><slot /></component>
</template>
