<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ href?: string; class?: string }>()
</script>

<template>
  <a
    :href="props.href"
    aria-label="Go to next page"
    :class="cn('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-9 px-4 gap-1 pe-2.5', props.class)"
  >
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </a>
</template>
