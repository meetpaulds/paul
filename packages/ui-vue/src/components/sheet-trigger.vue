<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'

const toggle = inject<() => void>('sheet-toggle')!
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'span'
</script>

<template>
  <component :is="tag" @click="toggle" :class="cn(props.class)" style="display: contents">
    <slot />
  </component>
</template>
