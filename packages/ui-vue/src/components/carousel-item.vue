<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ class?: string }>()
const register = inject<() => void>('carousel-register')!
onMounted(() => register())
</script>

<template>
  <div :class="cn('min-w-0 shrink-0 grow-0 basis-full', props.class)">
    <slot />
  </div>
</template>
