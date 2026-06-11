<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  href?: string
  class?: string
}>()
const tag = props.as || 'a'
</script>
<template>
  <component :is="tag" :href="tag === 'a' ? props.href : undefined" :class="cn('transition-colors hover:text-foreground', props.class)">
    <slot />
  </component>
</template>
