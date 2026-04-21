<script setup lang="ts">
import { PopoverPortal, PopoverContent, type PopoverContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating panel content. Renders in a portal and positions relative to PopoverTrigger. */
defineOptions({ name: 'PopoverContent' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <PopoverPortal>
    <PopoverContent v-bind="props" :class="cn('z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)"><slot /></PopoverContent>
  </PopoverPortal>
</template>