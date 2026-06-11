<script setup lang="ts">
import { ContextMenuTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Element that opens the ContextMenu on end-click. */
defineOptions({ name: 'ContextMenuTrigger' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || ContextMenuTrigger
</script>
<template><component :is="tag" :class="cn(props.class)"><slot /></component></template>
