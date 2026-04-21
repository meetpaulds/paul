<script setup lang="ts">
import { SeparatorRoot, type SeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Separator — a visual or semantic divider between content sections.
 *
 * @example
 * ```vue
 * <Separator />
 * <Separator orientation="vertical" class="h-6" />
 * ```
 *
 * @accessibility Renders as `role="separator"` or `role="none"` based on the `decorative` prop.
 */
defineOptions({ name: 'Separator' })
const props = defineProps<{ class?: string }>()
</script>
<template><SeparatorRoot v-bind="props" :class="cn('shrink-0 bg-border', props.orientation === 'vertical' ? 'h-full w-[1px]' : 'h-[1px] w-full', props.class)" /></template>