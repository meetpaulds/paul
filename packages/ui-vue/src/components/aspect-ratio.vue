<script setup lang="ts">
import { AspectRatio, type AspectRatioProps } from 'radix-vue'
/**
 * AspectRatio — constrains its child to a specific width-to-height ratio.
 *
 * @example
 * ```vue
 * <AspectRatio :ratio="16 / 9">
 *   <img src="..." alt="..." class="object-cover w-full h-full" />
 * </AspectRatio>
 * ```
 */
defineOptions({ name: 'AspectRatio' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || AspectRatio
</script>
<template>
  <component :is="tag" v-bind="props">
    <slot />
  </component>
</template>
