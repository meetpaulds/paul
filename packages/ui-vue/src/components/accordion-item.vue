<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/** A single accordion section. Requires a unique `value` prop. */
defineOptions({ name: 'AccordionItem' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AccordionItem v-bind="props" :class="cn('border-b', props.class)">
    <slot />
  </AccordionItem>
</template>
