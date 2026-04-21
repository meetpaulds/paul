<script setup lang="ts">
import { HoverCardPortal, HoverCardContent, type HoverCardContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating card content panel. Renders in a portal and positions itself relative to the trigger. */
defineOptions({ name: 'HoverCardContent' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <HoverCardPortal>
    <HoverCardContent v-bind="props" :class="cn('z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)"><slot /></HoverCardContent>
  </HoverCardPortal>
</template>