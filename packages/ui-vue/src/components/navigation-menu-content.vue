<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'
const open = inject<Ref<boolean>>('nav-item-open')!
const props = defineProps<{ class?: string }>()
</script>
<template>
  <div v-if="open" :class="cn('absolute start-0 top-full mt-1.5 w-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg', props.class)">
    <slot />
  </div>
</template>
