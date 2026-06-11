<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'tbody'
</script>

<template>
  <component :is="tag" :class="cn('[&_tr:last-child]:border-0', props.class)"><slot /></component>
</template>
