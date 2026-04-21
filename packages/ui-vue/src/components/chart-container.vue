<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  config?: Record<string, { label: string; color: string }>
}>(), {
  config: () => ({}),
})

const cssVars = computed(() =>
  Object.entries(props.config)
    .map(([key, value]) => `--color-${key}: ${value.color}`)
    .join('; ')
)
</script>

<template>
  <div
    :class="cn('flex aspect-video justify-center text-xs', props.class)"
    :style="cssVars"
  >
    <slot />
  </div>
</template>
