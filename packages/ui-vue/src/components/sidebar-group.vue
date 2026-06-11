<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('relative flex w-full min-w-0 flex-col p-2', props.class)">
    <slot />
  </component>
</template>
