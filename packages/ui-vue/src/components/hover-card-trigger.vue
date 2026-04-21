<script setup lang="ts">
import { HoverCardTrigger } from 'radix-vue'
/** Element that reveals the HoverCard on hover. Renders its child via `as-child`. */
defineOptions({ name: 'HoverCardTrigger' })
</script>
<template><HoverCardTrigger as-child><slot /></HoverCardTrigger></template>