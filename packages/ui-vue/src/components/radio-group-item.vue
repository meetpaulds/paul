<script setup lang="ts">
import { RadioGroupItem, RadioGroupIndicator, type RadioGroupItemProps } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
/** Individual radio button inside a RadioGroup. Requires a unique `value` prop.
 *
 * @accessibility Touch target is 24×24px (WCAG 2.5.8 AA). For strict AAA (44×44px),
 *   wrap with a larger clickable area or use inside a `<label>` that extends the hit region.
 */
defineOptions({ name: 'RadioGroupItem' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <RadioGroupItem v-bind="props" :class="cn('aspect-square h-6 w-6 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)">
    <RadioGroupIndicator class="flex items-center justify-center"><Circle class="h-3.5 w-3.5 fill-primary" /></RadioGroupIndicator>
  </RadioGroupItem>
</template>