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
  <component :is="tag" :href="tag === 'a' ? props.href : undefined" :class="cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', props.class)">
    <slot />
  </component>
</template>
