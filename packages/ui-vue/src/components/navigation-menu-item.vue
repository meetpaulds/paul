<script setup lang="ts">
import { ref, provide } from 'vue'
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'li'
const open = ref(false)
provide('nav-item-open', open)
provide('nav-item-toggle', () => { open.value = !open.value })
provide('nav-item-close', () => { open.value = false })
</script>
<template>
  <component :is="tag" :class="cn('relative', props.class)"><slot /></component>
</template>
