<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'tr'
</script>

<template>
  <component :is="tag" :class="cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', props.class)"><slot /></component>
</template>
