<script setup lang="ts">
import { DropdownMenuTrigger } from 'radix-vue'
/** Trigger element that opens the DropdownMenu. Renders its child via `as-child`. */
defineOptions({ name: 'DropdownMenuTrigger' })
</script>
<template><DropdownMenuTrigger as-child><slot /></DropdownMenuTrigger></template>