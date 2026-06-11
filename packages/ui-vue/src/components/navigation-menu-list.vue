<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'ul'
</script>
<template>
  <component :is="tag" :class="cn('group flex flex-1 list-none items-center justify-center gap-x-1', props.class)"><slot /></component>
</template>
