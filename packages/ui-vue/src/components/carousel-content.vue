<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
const current = inject<Ref<number>>('carousel-current')!
</script>

<template>
  <component :is="tag" class="overflow-hidden">
    <div
      :class="cn('flex', props.class)"
      :style="`transform: translateX(-${current * 100}%); transition: transform 0.3s ease`"
    >
      <slot />
    </div>
  </component>
</template>
