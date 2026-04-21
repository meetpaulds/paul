<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ class?: string }>()
const search = ref('')
provide('command-search', search)
</script>

<template>
  <div :class="cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', props.class)">
    <slot />
  </div>
</template>
