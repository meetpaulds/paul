<script setup lang="ts">
import { DialogDescription } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Optional supporting description rendered below DialogTitle. */
defineOptions({ name: 'DialogDescription' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DialogDescription
</script>
<template><component :is="tag" :class="cn('text-sm text-muted-foreground', props.class)"><slot /></component></template>
