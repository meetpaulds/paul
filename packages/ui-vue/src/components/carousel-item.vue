<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
const register = inject<() => void>('carousel-register')!
onMounted(() => register())
</script>

<template>
  <component :is="tag" :class="cn('min-w-0 shrink-0 grow-0 basis-full', props.class)">
    <slot />
  </component>
</template>
