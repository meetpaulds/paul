<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  as?: string | any
  class?: string
  config?: Record<string, { label: string; color: string }>
}>(), {
  config: () => ({}),
})
const tag = props.as || 'div'

const cssVars = computed(() =>
  Object.entries(props.config)
    .map(([key, value]) => `--color-${key}: ${value.color}`)
    .join('; ')
)
</script>

<template>
  <component
    :is="tag"
    :class="cn('flex aspect-video justify-center text-xs', props.class)"
    :style="cssVars"
  >
    <slot />
  </component>
</template>
