<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Tab button that activates its associated TabsContent panel. Requires a `value` prop. */
defineOptions({ name: 'TabsTrigger' })
const props = defineProps<{
  as?: string | any
  value: string
  class?: string
  disabled?: boolean
}>()
const tag = props.as || TabsTrigger
</script>
<template><component :is="tag" v-bind="props" :class="cn('inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow', props.class)"><slot /></component></template>
