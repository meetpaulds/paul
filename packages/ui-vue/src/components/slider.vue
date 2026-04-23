<script setup lang="ts">
import { SliderRoot, SliderTrack, SliderRange, SliderThumb, type SliderRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Slider — range value selector with one or more draggable thumbs.
 *
 * @example
 * ```vue
 * <Slider :model-value="[50]" :min="0" :max="100" :step="1" />
 * ```
 *
 * @accessibility Keyboard: Arrow keys move by step, Home/End jump to min/max.
 */
defineOptions({ name: 'Slider' })
const props = defineProps<{ modelValue?: number[]; min?: number; max?: number; step?: number; disabled?: boolean; orientation?: 'horizontal' | 'vertical'; class?: string }>()
</script>
<template>
  <SliderRoot v-bind="props" :class="cn('relative flex w-full touch-none select-none items-center', props.class)">
    <SliderTrack class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>
    <SliderThumb v-for="(_, i) in (props.modelValue ?? [0])" :key="i" class="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderRoot>
</template>