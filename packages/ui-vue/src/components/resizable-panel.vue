<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ defaultSize?: number; class?: string }>()
</script>
<template>
  <div :style="props.defaultSize ? `flex: 0 0 ${props.defaultSize}%` : 'flex: 1'" :class="cn('overflow-hidden', props.class)">
    <slot />
  </div>
</template>
