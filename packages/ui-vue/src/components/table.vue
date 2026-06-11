<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>

<template>
  <component :is="tag" class="relative w-full overflow-auto">
    <table :class="cn('w-full caption-bottom text-sm print:border-black', props.class)">
      <slot />
    </table>
  </component>
</template>
