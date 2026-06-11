<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '../lib/utils'
const close = inject<() => void>('sheet-close')!
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'span'
</script>
<template>
  <component :is="tag" @click="close" :class="cn(props.class)" style="display: contents"><slot /></component>
</template>
