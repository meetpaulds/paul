<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * Empty — empty state placeholder with optional icon, title, description, and action.
 *
 * @example
 * ```vue
 * <Empty title="No results" description="Try adjusting your filters.">
 *   <template #icon><SearchX class="h-12 w-12 text-muted-foreground" /></template>
 *   <template #action><Button>Clear filters</Button></template>
 * </Empty>
 * ```
 */
defineOptions({ name: 'Empty' })
const props = defineProps<{ title?: string; description?: string; class?: string }>()
</script>
<template>
  <div :class="cn('flex flex-col items-center justify-center text-center p-8', props.class)">
    <slot name="icon" />
    <h3 v-if="props.title" class="mt-4 text-lg font-semibold">{{ props.title }}</h3>
    <p v-if="props.description" class="mt-2 text-sm text-muted-foreground">{{ props.description }}</p>
    <div v-if="$slots.action" class="mt-4"><slot name="action" /></div>
  </div>
</template>