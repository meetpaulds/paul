<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'
const open = inject<Ref<boolean>>('sidebar-open')!
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || 'aside'
</script>
<template>
  <component :is="tag" v-show="open" :class="cn('flex h-full w-64 flex-col border-e bg-sidebar text-sidebar-foreground', props.class)">
    <slot />
  </component>
</template>
