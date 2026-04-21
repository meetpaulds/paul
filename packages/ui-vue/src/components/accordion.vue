<script setup lang="ts">
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  type AccordionRootProps,
} from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * Accordion — root container. Set `type="single"` for one-open or `type="multiple"` for multi-open.
 *
 * @example
 * ```vue
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes. It adheres to WAI-ARIA.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 *
 * @accessibility Built on Radix Vue AccordionRoot. Keyboard-navigable with Arrow keys.
 */
defineOptions({ name: 'Accordion' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AccordionRoot v-bind="props" :class="cn('divide-y divide-border', props.class)">
    <slot />
  </AccordionRoot>
</template>
