<script setup lang="ts">
import { cn } from '../lib/utils'

defineOptions({ inheritAttrs: false })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'nav'
</script>
<template>
  <component :is="tag" aria-label="breadcrumb" v-bind="$attrs" :class="cn('', props.class)">
    <slot />
  </component>
</template>
