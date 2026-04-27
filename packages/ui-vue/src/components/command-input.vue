<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ placeholder?: string; class?: string }>()
const search = inject<Ref<string>>('command-search')!
</script>

<template>
  <div class="flex items-center border-b px-3">
    <svg class="me-2 h-4 w-4 shrink-0 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    <input
      v-model="search"
      :placeholder="props.placeholder ?? 'Type a command or search...'"
      :class="cn('flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>
