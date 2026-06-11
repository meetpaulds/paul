<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>

<template>
  <component :is="tag" :class="cn('rounded-lg border bg-background px-3 py-2 shadow-md text-xs', props.class)">
    <slot />
  </component>
</template>
