<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ isActive?: boolean; class?: string }>()
</script>
<template>
  <button :class="cn('flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-start text-sm outline-none ring-sidebar-ring transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground', props.isActive ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground' : '', props.class)">
    <slot />
  </button>
</template>
