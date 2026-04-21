<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ class?: string }>()
const current = inject<Ref<number>>('carousel-current')!
</script>

<template>
  <div class="overflow-hidden">
    <div
      :class="cn('flex', props.class)"
      :style="`transform: translateX(-${current * 100}%); transition: transform 0.3s ease`"
    >
      <slot />
    </div>
  </div>
</template>
