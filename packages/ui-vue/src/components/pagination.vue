<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'nav'
</script>
<template>
  <component :is="tag" role="navigation" aria-label="pagination" :class="cn('mx-auto flex w-full justify-center', props.class)">
    <slot />
  </component>
</template>
