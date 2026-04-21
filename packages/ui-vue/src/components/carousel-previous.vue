<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '../lib/utils'
const prev = inject<() => void>('carousel-prev')!
const props = defineProps<{ class?: string }>()
</script>
<template>
  <button @click="prev" :class="cn('absolute left-[-48px] top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background shadow hover:bg-accent', props.class)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
    <span class="sr-only">Previous</span>
  </button>
</template>
