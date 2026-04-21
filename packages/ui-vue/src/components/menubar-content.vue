<script setup lang="ts">
import { MenubarPortal, MenubarContent, type MenubarContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Floating dropdown panel containing MenubarItems. Renders in a portal. */
defineOptions({ name: 'MenubarContent' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <MenubarPortal>
    <MenubarContent v-bind="props" :class="cn('z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out', props.class)"><slot /></MenubarContent>
  </MenubarPortal>
</template>