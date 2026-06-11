<script setup lang="ts">
import { MenubarSeparator } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Horizontal divider between groups of MenubarItems. */
defineOptions({ name: 'MenubarSeparator' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || MenubarSeparator
</script>
<template><component :is="tag" :class="cn('-mx-1 my-1 h-px bg-muted', props.class)" /></template>
