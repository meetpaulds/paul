<script setup lang="ts">
import { SelectPortal, SelectContent, SelectViewport, type SelectContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Dropdown panel containing SelectItems. Renders in a portal. */
defineOptions({ name: 'SelectContent' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <SelectPortal>
    <SelectContent v-bind="props" :class="cn('relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)">
      <SelectViewport class="p-1"><slot /></SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>