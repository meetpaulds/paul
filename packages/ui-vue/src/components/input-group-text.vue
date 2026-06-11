<script setup lang="ts">
import { cn } from '@/lib/utils'
/** Static text addon rendered inside an InputGroup as a prefix or suffix. */
defineOptions({ name: 'InputGroupText' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component :is="tag" :class="cn('flex items-center rounded-md border border-input bg-muted px-3 text-sm text-muted-foreground', props.class)">
    <slot />
  </component>
</template>
