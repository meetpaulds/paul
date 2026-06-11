<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  defaultSize?: number
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :style="props.defaultSize ? `flex: 0 0 ${props.defaultSize}%` : 'flex: 1'" :class="cn('overflow-hidden', props.class)">
    <slot />
  </component>
</template>
