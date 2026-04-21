<script setup lang="ts">
import { ContextMenuPortal, ContextMenuContent, type ContextMenuContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating panel containing ContextMenu items. Renders in a portal. */
defineOptions({ name: 'ContextMenuContent' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <ContextMenuPortal>
    <ContextMenuContent v-bind="props" :class="cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80', props.class)"><slot /></ContextMenuContent>
  </ContextMenuPortal>
</template>