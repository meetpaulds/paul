<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '../lib/utils'
const toggle = inject<() => void>('alert-dialog-toggle')!
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'span'
</script>
<template><component :is="tag" @click="toggle" :class="cn(props.class)" style="display:contents"><slot /></component></template>
