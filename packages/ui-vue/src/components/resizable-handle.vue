<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ withHandle?: boolean; class?: string }>()
</script>
<template>
  <div :class="cn('relative flex w-px items-center justify-center bg-border cursor-col-resize', props.class)">
    <div v-if="props.withHandle" class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
    </div>
  </div>
</template>
