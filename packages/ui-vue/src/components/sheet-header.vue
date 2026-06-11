<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('flex flex-col space-y-2 text-center sm:text-start', props.class)"><slot /></component>
</template>
