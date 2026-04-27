<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * InputGroup — combines an input with prefix/suffix addons, merging their borders.
 *
 * @example
 * ```vue
 * <InputGroup>
 *   <InputGroupText>https://</InputGroupText>
 *   <Input placeholder="example.com" />
 * </InputGroup>
 * ```
 */
defineOptions({ name: 'InputGroup' })
const props = defineProps<{ class?: string }>()
</script>
<template><div :class="cn('flex [&>*:not(:first-child)]:-ms-px [&>*:not(:last-child)]:rounded-e-none [&>*:not(:first-child)]:rounded-s-none', props.class)"><slot /></div></template>