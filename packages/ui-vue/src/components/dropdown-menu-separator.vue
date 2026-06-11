<script setup lang="ts">
import { DropdownMenuSeparator } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Horizontal rule to visually separate groups of DropdownMenuItems. */
defineOptions({ name: 'DropdownMenuSeparator' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DropdownMenuSeparator
</script>
<template><component :is="tag" :class="cn('-mx-1 my-1 h-px bg-muted', props.class)" /></template>
