<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ class?: string }>()
</script>
<template>
  <ul :class="cn('group flex flex-1 list-none items-center justify-center gap-x-1', props.class)"><slot /></ul>
</template>
