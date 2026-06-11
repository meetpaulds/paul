<script setup lang="ts">
import { CollapsibleRoot, type CollapsibleRootProps } from 'radix-vue'
/**
 * Collapsible — root container for an expandable/collapsible region.
 *
 * @example
 * ```vue
 * <Collapsible v-model:open="isOpen">
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Hidden content</CollapsibleContent>
 * </Collapsible>
 * ```
 */
defineOptions({ name: 'Collapsible' })
const props = defineProps<{
  as?: string | any
}>()
const tag = props.as || CollapsibleRoot
</script>
<template>
  <component :is="tag" v-bind="props">
    <slot />
  </component>
</template>
