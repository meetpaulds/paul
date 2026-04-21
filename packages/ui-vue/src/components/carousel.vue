<script setup lang="ts">
import { ref, provide } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ class?: string }>()
const current = ref(0)
const count = ref(0)

provide('carousel-current', current)
provide('carousel-count', count)
provide('carousel-prev', () => { if (current.value > 0) current.value-- })
provide('carousel-next', () => { if (current.value < count.value - 1) current.value++ })
provide('carousel-register', () => { count.value++ })
</script>

<template>
  <div :class="cn('relative', props.class)">
    <slot />
  </div>
</template>
