<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner, type ScrollAreaRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * ScrollArea — custom scrollable container with styled scrollbars.
 *
 * @example
 * ```vue
 * <ScrollArea class="h-72 w-48 rounded-md border">
 *   <div v-for="item in items" :key="item" class="p-4">{{ item }}</div>
 * </ScrollArea>
 * ```
 */
defineOptions({ name: 'ScrollArea' })
const props = defineProps<{ class?: string; orientation?: 'vertical' | 'horizontal' | 'both' }>()
</script>
<template>
  <ScrollAreaRoot v-bind="props" :class="cn('relative overflow-hidden', props.class)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]"><slot /></ScrollAreaViewport>
    <ScrollAreaScrollbar v-if="props.orientation !== 'horizontal'" orientation="vertical" class="flex touch-none select-none transition-colors h-full w-2.5 border-l border-l-transparent p-[1px]">
      <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar v-if="props.orientation === 'horizontal' || props.orientation === 'both'" orientation="horizontal" class="flex touch-none select-none transition-colors flex-col h-2.5 border-t border-t-transparent p-[1px]">
      <ScrollAreaThumb class="relative rounded-full bg-border" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>