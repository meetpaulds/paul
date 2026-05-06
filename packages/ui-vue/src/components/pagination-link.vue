<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ href?: string; isActive?: boolean; class?: string }>()
</script>

<template>
  <a
    :href="props.href"
    :aria-current="props.isActive ? 'page' : undefined"
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 w-11',
      props.isActive ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground',
      props.class
    )"
  >
    <slot />
  </a>
</template>
