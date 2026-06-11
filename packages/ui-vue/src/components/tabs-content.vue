<script setup lang="ts">
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Content panel shown when its matching TabsTrigger is active. Requires a `value` prop. */
defineOptions({ name: 'TabsContent' })
const props = defineProps<{
  as?: string | any
  value: string
  class?: string
  forceMount?: boolean
}>()
const tag = props.as || TabsContent
</script>
<template><component :is="tag" v-bind="props" :class="cn('mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', props.class)"><slot /></component></template>
