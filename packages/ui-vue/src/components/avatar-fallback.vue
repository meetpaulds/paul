<script setup lang="ts">
import { AvatarFallback, type AvatarFallbackProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/** Fallback initials or icon shown when the AvatarImage cannot load. */
defineOptions({ name: 'AvatarFallback' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AvatarFallback v-bind="props" :class="cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)" />
</template>
