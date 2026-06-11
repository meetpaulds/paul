<script setup lang="ts">
import { PopoverPortal, PopoverContent, type PopoverContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating panel content. Renders in a portal and positions relative to PopoverTrigger. */
defineOptions({ name: 'PopoverContent' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || PopoverContent
</script>
<template>
  <PopoverPortal>
    <component :is="tag" v-bind="props" :class="cn('z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)"><slot /></component>
  </PopoverPortal>
</template>
