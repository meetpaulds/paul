<script setup lang="ts">
import { CollapsibleContent } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Animatable content area of a Collapsible. Hidden when closed. */
defineOptions({ name: 'CollapsibleContent' })
const props = defineProps<{ class?: string }>()
</script>
<template><CollapsibleContent :class="cn('overflow-hidden', props.class)"><slot /></CollapsibleContent></template>