<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ class?: string }>()
</script>
<template><div :class="cn('py-6 text-center text-sm text-muted-foreground', props.class)"><slot /></div></template>
