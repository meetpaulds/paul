<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Wraps a MenubarTrigger and its MenubarContent into a single menu entry. */
defineOptions({ name: 'MenubarMenu' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || MenubarMenu
</script>
<template><component :is="tag" v-bind="props" :class="cn(props.class)"><slot /></component></template>
