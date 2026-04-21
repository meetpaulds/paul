<script setup lang="ts">
import { RadioGroupRoot, type RadioGroupRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * RadioGroup — single-selection control for choosing one option from a set.
 *
 * @example
 * ```vue
 * <RadioGroup v-model="plan">
 *   <div class="flex items-center gap-2">
 *     <RadioGroupItem value="starter" id="starter" />
 *     <Label for="starter">Starter</Label>
 *   </div>
 *   <div class="flex items-center gap-2">
 *     <RadioGroupItem value="pro" id="pro" />
 *     <Label for="pro">Pro</Label>
 *   </div>
 * </RadioGroup>
 * ```
 *
 * @accessibility Arrow keys cycle through items. Each item should have an associated Label.
 */
defineOptions({ name: 'RadioGroup' })
const props = defineProps<{ class?: string }>()
</script>
<template><RadioGroupRoot v-bind="props" :class="cn('grid gap-2', props.class)"><slot /></RadioGroupRoot></template>