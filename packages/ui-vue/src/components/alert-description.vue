<script setup lang="ts">
import { cn } from '@/lib/utils'
/** Supporting description text inside an Alert. */
defineOptions({ name: 'AlertDescription' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template><component :is="tag" :class="cn('text-sm [&_p]:leading-relaxed', props.class)"><slot /></component></template>
