<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
const search = ref('')
provide('command-search', search)
</script>

<template>
  <component :is="tag" :class="cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', props.class)">
    <slot />
  </component>
</template>
