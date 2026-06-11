<script setup lang="ts">
import { ref, provide } from 'vue'
import { cn } from '../lib/utils'
const open = ref(true)
provide('sidebar-open', open)
provide('sidebar-toggle', () => { open.value = !open.value })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('flex h-full', props.class)">
    <slot />
  </component>
</template>
