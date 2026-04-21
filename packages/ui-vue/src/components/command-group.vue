<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ heading?: string; class?: string }>()
</script>
<template>
  <div :class="cn('overflow-hidden p-1 text-foreground', props.class)">
    <div v-if="props.heading" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">{{ props.heading }}</div>
    <slot />
  </div>
</template>
