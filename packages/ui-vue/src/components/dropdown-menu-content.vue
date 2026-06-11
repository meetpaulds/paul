<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuContent, type DropdownMenuContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating panel containing dropdown menu items. Renders in a portal. */
defineOptions({ name: 'DropdownMenuContent' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DropdownMenuContent
</script>
<template>
  <DropdownMenuPortal>
    <component :is="tag" v-bind="props" :class="cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)"><slot /></component>
  </DropdownMenuPortal>
</template>
