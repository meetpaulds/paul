<script setup lang="ts">
import { cn } from '../lib/utils'

defineOptions({ inheritAttrs: false })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <nav aria-label="breadcrumb" v-bind="$attrs" :class="cn('', props.class)">
    <slot />
  </nav>
</template>
