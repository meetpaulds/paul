<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  heading?: string
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('overflow-hidden p-1 text-foreground', props.class)">
    <div v-if="props.heading" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">{{ props.heading }}</div>
    <slot />
  </component>
</template>
