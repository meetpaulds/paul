<script setup lang="ts">
import { CollapsibleTrigger } from 'radix-vue'
/** Trigger button that toggles the Collapsible open or closed. */
defineOptions({ name: 'CollapsibleTrigger' })
const props = defineProps<{
  as?: string | any
}>()
const tag = props.as || CollapsibleTrigger
</script>
<template>
  <component :is="tag">
    <slot />
  </component>
</template>
