<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'li'
</script>
<template>
  <component :is="tag" :class="cn('inline-flex items-center gap-1.5', props.class)">
    <slot />
  </component>
</template>
