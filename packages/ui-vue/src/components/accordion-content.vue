<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/** Collapsible content panel rendered below AccordionTrigger. Animates open/closed via data attributes. */
defineOptions({ name: 'AccordionContent' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AccordionContent
    v-bind="props"
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
