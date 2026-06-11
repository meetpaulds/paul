<script setup lang="ts">
import { TabsList } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Container for TabsTrigger buttons, styled as a segmented control. */
defineOptions({ name: 'TabsList' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || TabsList
</script>
<template><component :is="tag" :class="cn('inline-flex h-11 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground', props.class)"><slot /></component></template>
