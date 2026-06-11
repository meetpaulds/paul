<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'nav'
</script>
<template>
  <component :is="tag" :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)">
    <slot />
  </component>
</template>
