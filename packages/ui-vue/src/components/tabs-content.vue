<script setup lang="ts">
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Content panel shown when its matching TabsTrigger is active. Requires a `value` prop. */
defineOptions({ name: 'TabsContent' })
const props = defineProps<{ value: string; class?: string; forceMount?: boolean }>()
</script>
<template><TabsContent v-bind="props" :class="cn('mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring', props.class)"><slot /></TabsContent></template>