<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, type TooltipContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Tooltip — concise text label that appears on hover/focus to describe an element.
 *
 * @example
 * ```vue
 * <Tooltip content="Save changes">
 *   <Button size="icon"><Save class="h-4 w-4" /></Button>
 * </Tooltip>
 * ```
 *
 * @accessibility The `content` prop becomes the tooltip text. For icon-only triggers also add `aria-label`.
 */
defineOptions({ name: 'Tooltip' })
const props = defineProps<{ content: string; class?: string }>()
</script>
<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger as-child><slot /></TooltipTrigger>
      <TooltipPortal>
        <TooltipContent v-bind="props" :class="cn('z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95', props.class)">{{ props.content }}</TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>