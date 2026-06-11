<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * Kbd — displays keyboard shortcut keys with monospace styling.
 *
 * @example
 * ```vue
 * <span>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the palette</span>
 * ```
 */
defineOptions({ name: 'Kbd' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'kbd'
</script>
<template>
  <component :is="tag" :class="cn('pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground', props.class)"><slot /></component>
</template>
