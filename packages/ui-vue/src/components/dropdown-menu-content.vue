<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuContent, type DropdownMenuContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating panel containing dropdown menu items. Renders in a portal. */
defineOptions({ name: 'DropdownMenuContent' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <DropdownMenuPortal>
    <DropdownMenuContent v-bind="props" :class="cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)"><slot /></DropdownMenuContent>
  </DropdownMenuPortal>
</template>