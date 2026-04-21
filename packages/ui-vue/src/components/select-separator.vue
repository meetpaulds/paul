<script setup lang="ts">
import { SelectSeparator } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Horizontal divider between groups of SelectItems. */
defineOptions({ name: 'SelectSeparator' })
const props = defineProps<{ class?: string }>()
</script>
<template><SelectSeparator :class="cn('-mx-1 my-1 h-px bg-muted', props.class)" /></template>