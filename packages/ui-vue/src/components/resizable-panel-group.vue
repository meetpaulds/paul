<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ direction?: 'horizontal' | 'vertical'; class?: string }>()
</script>
<template>
  <div :class="cn('flex h-full w-full', props.direction === 'vertical' ? 'flex-col' : '', props.class)">
    <slot />
  </div>
</template>
