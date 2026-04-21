<script setup lang="ts">
import { cn } from '@/lib/utils'
/** Supporting description text inside an Alert. */
defineOptions({ name: 'AlertDescription' })
const props = defineProps<{ class?: string }>()
</script>
<template><div :class="cn('text-sm [&_p]:leading-relaxed', props.class)"><slot /></div></template>