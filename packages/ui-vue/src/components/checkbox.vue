<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator, type CheckboxRootProps } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
/**
 * Checkbox — accessible checkbox control backed by Radix Vue.
 *
 * @example
 * ```vue
 * <Checkbox id="terms" v-model:checked="accepted" />
 * <label for="terms">Accept terms and conditions</label>
 * ```
 *
 * @accessibility Fully keyboard-navigable. Supports indeterminate state via `checked="indeterminate"`.
 */
defineOptions({ name: 'Checkbox' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <CheckboxRoot v-bind="props" :class="cn('peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground', props.class)">
    <CheckboxIndicator class="flex items-center justify-center text-current"><Check class="h-4 w-4" /></CheckboxIndicator>
  </CheckboxRoot>
</template>