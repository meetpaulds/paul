<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="cn('rounded-lg border bg-background px-3 py-2 shadow-md text-xs', props.class)">
    <slot />
  </div>
</template>
