<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'ul'
</script>
<template>
  <component :is="tag" :class="cn('flex w-full min-w-0 flex-col gap-1', props.class)">
    <slot />
  </component>
</template>
