<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'td'
</script>

<template>
  <component :is="tag" :class="cn('p-2 align-middle', props.class)"><slot /></component>
</template>
