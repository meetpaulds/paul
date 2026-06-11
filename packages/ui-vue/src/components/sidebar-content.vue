<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto', props.class)">
    <slot />
  </component>
</template>
