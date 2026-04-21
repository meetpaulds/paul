<script setup lang="ts">
import { LabelRoot, type LabelProps } from 'radix-vue'
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
const props = defineProps<{ class?: string }>()
</script>
<template><LabelRoot v-bind="props" :class="cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', props.class)"><slot /></LabelRoot></template>