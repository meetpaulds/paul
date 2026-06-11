<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2', props.class)"><slot /></component>
</template>
