<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * Textarea — multi-line text input with consistent focus styling.
 *
 * @example
 * ```vue
 * <Textarea v-model="bio" placeholder="Tell us about yourself." />
 * ```
 *
 * @accessibility Always associate with a `<label>` or use inside `<Field>`.
 */
defineOptions({ name: 'Textarea' })
const props = defineProps<{ class?: string; disabled?: boolean; placeholder?: string; rows?: number }>()
const model = defineModel<string>()
</script>
<template><textarea v-bind="props" v-model="model" :class="cn('flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)" /></template>