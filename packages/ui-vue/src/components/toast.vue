<script setup lang="ts">
import { cn } from '../lib/utils'
import ToastTitle from './toast-title.vue'
import ToastDescription from './toast-description.vue'

const props = defineProps<{
  variant?: 'default' | 'destructive'
  class?: string
  title?: string
  description?: string
}>()
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
    <div class="flex flex-col gap-1">
      <slot name="title">
        <ToastTitle v-if="props.title">{{ props.title }}</ToastTitle>
      </slot>
      <slot name="description">
        <ToastDescription v-if="props.description">{{ props.description }}</ToastDescription>
      </slot>
      <slot />
    </div>
    <slot name="action" />
  </div>
</template>
