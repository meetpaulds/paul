<script setup lang="ts">
import { cn } from '@/lib/utils'
/** Top section of DialogContent, containing DialogTitle and DialogDescription. */
defineOptions({ name: 'DialogHeader' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template><component :is="tag" :class="cn('flex flex-col space-y-1.5 text-center sm:text-start', props.class)"><slot /></component></template>
