<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/** Image element inside an Avatar. Shows the fallback if the image fails to load. */
defineOptions({ name: 'AvatarImage' })
const props = defineProps<{ src: string; class?: string }>()
</script>

<template>
  <AvatarImage v-bind="props" :class="cn('aspect-square h-full w-full', props.class)" />
</template>
