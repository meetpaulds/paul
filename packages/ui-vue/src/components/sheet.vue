<script setup lang="ts">
import { ref, provide } from 'vue'
import { cn } from '../lib/utils'

const open = ref(false)
provide('sheet-open', open)
provide('sheet-close', () => { open.value = false })
provide('sheet-toggle', () => { open.value = !open.value })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>

<template>
  <component :is="tag" :class="cn(props.class)">
    <slot :open="open" />
  </component>
</template>
