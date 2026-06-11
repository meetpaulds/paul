<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'tfoot'
</script>

<template>
  <component :is="tag" :class="cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', props.class)"><slot /></component>
</template>
