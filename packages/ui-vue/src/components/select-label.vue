<script setup lang="ts">
import { SelectLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
/** Non-interactive group label inside SelectContent. */
defineOptions({ name: 'SelectLabel' })
const props = defineProps<{ class?: string }>()
</script>
<template><SelectLabel :class="cn('px-2 py-1.5 text-xs font-semibold', props.class)"><slot /></SelectLabel></template>