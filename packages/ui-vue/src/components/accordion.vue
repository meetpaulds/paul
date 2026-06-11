<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootProps,
} from 'radix-vue'
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
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || AccordionRoot
</script>

<template>
  <component :is="tag" v-bind="props" :class="cn(props.class)">
    <slot />
  </component>
</template>
