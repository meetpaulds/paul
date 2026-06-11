<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'span'
</script>
<template>
  <component :is="tag" role="link" aria-disabled="true" aria-current="page" :class="cn('font-normal text-foreground', props.class)">
    <slot />
  </component>
</template>
