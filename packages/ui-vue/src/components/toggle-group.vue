<script setup lang="ts">
import { ToggleGroupRoot, type ToggleGroupRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * ToggleGroup — a set of Toggle buttons where one (or many) can be active.
 *
 * @example
 * ```vue
 * <ToggleGroup type="single" v-model="alignment">
 *   <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft class="h-4 w-4" /></ToggleGroupItem>
 *   <ToggleGroupItem value="center" aria-label="Center"><AlignCenter class="h-4 w-4" /></ToggleGroupItem>
 *   <ToggleGroupItem value="right" aria-label="Align right"><AlignRight class="h-4 w-4" /></ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
defineOptions({ name: 'ToggleGroup' })
const props = defineProps<{ class?: string }>()
</script>
<template><ToggleGroupRoot v-bind="props" :class="cn('flex items-center justify-center gap-1', props.class)"><slot /></ToggleGroupRoot></template>