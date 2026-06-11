<script setup lang="ts">
import { DialogTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Element that opens the Dialog when clicked. Renders its child via `as-child`. */
defineOptions({ name: 'DialogTrigger' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DialogTrigger
</script>
<template><component :is="tag" as-child :class="cn(props.class)"><slot /></component></template>
