<script setup lang="ts">
import { SelectLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Non-interactive group label inside SelectContent. */
defineOptions({ name: 'SelectLabel' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || SelectLabel
</script>
<template><component :is="tag" :class="cn('px-2 py-1.5 text-sm font-semibold', props.class)"><slot /></component></template>
