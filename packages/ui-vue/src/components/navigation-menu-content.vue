<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'
const open = inject<Ref<boolean>>('nav-item-open')!
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'div'
</script>
<template>
  <component v-if="open" :is="tag" :class="cn('absolute start-0 top-full mt-1.5 w-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg', props.class)">
    <slot />
  </component>
</template>
