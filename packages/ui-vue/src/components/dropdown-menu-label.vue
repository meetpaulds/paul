<script setup lang="ts">
import { DropdownMenuLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Non-interactive group label inside DropdownMenuContent. */
defineOptions({ name: 'DropdownMenuLabel' })
const props = defineProps<{ class?: string; inset?: boolean }>()
</script>
<template><DropdownMenuLabel :class="cn('px-2 py-1.5 text-xs font-semibold', props.inset && 'ps-8', props.class)"><slot /></DropdownMenuLabel></template>