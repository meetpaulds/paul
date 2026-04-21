<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '../lib/utils'
const toggle = inject<() => void>('nav-item-toggle')!
const props = defineProps<{ class?: string }>()
</script>
<template>
  <button @click="toggle" :class="cn('group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50', props.class)">
    <slot />
    <svg class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>
</template>
