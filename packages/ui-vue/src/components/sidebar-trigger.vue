<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '../lib/utils'
const toggle = inject<() => void>('sidebar-toggle')!
const props = defineProps<{ class?: string }>()
</script>
<template>
  <button @click="toggle" :class="cn('inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent print:hidden', props.class)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>
    <span class="sr-only">Toggle Sidebar</span>
  </button>
</template>
