<script setup lang="ts">
import { CollapsibleContent } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Animatable content area of a Collapsible. Hidden when closed. */
defineOptions({ name: 'CollapsibleContent' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || CollapsibleContent
</script>
<template>
  <component :is="tag" :class="cn('overflow-hidden', props.class)">
    <slot />
  </component>
</template>
