<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ variant?: 'default' | 'destructive'; class?: string }>()
</script>
<template>
  <div
    role="status"
    aria-live="assertive"
    :class="cn(
      'group pointer-events-auto relative flex w-full items-center justify-between gap-x-4 overflow-hidden rounded-md border p-6 pe-8 shadow-lg transition-all',
      props.variant === 'destructive'
        ? 'destructive border-destructive bg-destructive text-destructive-foreground'
        : 'border bg-background text-foreground',
      props.class
    )"
  >
    <slot />
  </div>
</template>
