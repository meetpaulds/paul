<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * Skeleton — animated loading placeholder that mimics the shape of incoming content.
 *
 * @example
 * ```vue
 * <Skeleton class="h-4 w-[250px]" />
 * <Skeleton class="h-12 w-12 rounded-full" />
 * ```
 */
defineOptions({ name: 'Skeleton' })
const props = defineProps<{ class?: string }>()
</script>
<template><div :class="cn('animate-pulse rounded-md bg-primary/10', props.class)" /></template>