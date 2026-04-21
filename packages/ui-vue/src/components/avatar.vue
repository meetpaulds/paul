<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback, type AvatarRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * Avatar — root container for user avatars. Combine with AvatarImage and AvatarFallback.
 *
 * @example
 * ```vue
 * <Avatar>
 *   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
 *   <AvatarFallback>SC</AvatarFallback>
 * </Avatar>
 * ```
 *
 * @accessibility Always provide an `alt` on AvatarImage, or ensure AvatarFallback text is meaningful.
 */
defineOptions({ name: 'Avatar' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AvatarRoot v-bind="props" :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)">
    <slot />
  </AvatarRoot>
</template>
