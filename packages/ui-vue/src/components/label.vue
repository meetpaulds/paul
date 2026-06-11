<script setup lang="ts">
import { Label as LabelRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Label — accessible form label backed by Radix Vue LabelRoot.
 *
 * Automatically prevents text selection on double-click of associated controls.
 *
 * @example
 * ```vue
 * <Label for="email">Email address</Label>
 * <Input id="email" type="email" />
 * ```
 */
defineOptions({ name: 'Label' })
const props = defineProps<{
  as?: string | any
  for?: string
  class?: string
}>()
const tag = props.as || LabelRoot
</script>
<template>
  <component :is="tag" v-bind="props" :class="cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', props.class)"><slot /></component>
</template>
