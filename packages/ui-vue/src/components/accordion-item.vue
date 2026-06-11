<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/** A single accordion section. Requires a unique `value` prop. */
defineOptions({ name: 'AccordionItem' })
const props = defineProps<{
  as?: string | any
  value: string
  disabled?: boolean
  class?: string
}>()
const tag = props.as || AccordionItem
</script>

<template>
  <component :is="tag" v-bind="props" :class="cn('border-b', props.class)">
    <slot />
  </component>
</template>
