<script setup lang="ts">
import { PopoverRoot, type PopoverRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Popover — floating panel anchored to a trigger, for contextual forms or details.
 *
 * @example
 * ```vue
 * <Popover>
 *   <PopoverTrigger><Button>Settings</Button></PopoverTrigger>
 *   <PopoverContent>
 *     <p>Configure your preferences here.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 *
 * @accessibility Focus moves into the popover when opened. Escape closes it and returns focus.
 */
defineOptions({ name: 'Popover' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || PopoverRoot
</script>
<template><component :is="tag" v-bind="props" :class="cn(props.class)"><slot /></component></template>
