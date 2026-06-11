<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  direction?: 'horizontal' | 'vertical'
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('flex h-full w-full', props.direction === 'vertical' ? 'flex-col' : '', props.class)">
    <slot />
  </component>
</template>
