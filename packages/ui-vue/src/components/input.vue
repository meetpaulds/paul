<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * Input — single-line text input with consistent focus styling.
 *
 * @example
 * ```vue
 * <Input v-model="email" type="email" placeholder="you@example.com" />
 * ```
 *
 * @accessibility Always associate an Input with a `<label>` (or use inside `<Field>`).
 */
defineOptions({ name: 'Input' })
const props = defineProps<{ class?: string; type?: string; disabled?: boolean; placeholder?: string }>()
const model = defineModel<string | number>()
</script>
<template><input v-bind="props" v-model="model" :class="cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)" /></template>