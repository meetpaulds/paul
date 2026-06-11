<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'ul'
</script>
<template>
  <component :is="tag" :class="cn('flex flex-row items-center gap-1', props.class)"><slot /></component>
</template>
