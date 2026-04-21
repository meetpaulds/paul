<script setup lang="ts">
import { PopoverTrigger } from 'radix-vue'
/** Element that opens the Popover when clicked. Renders its child via `as-child`. */
defineOptions({ name: 'PopoverTrigger' })
</script>
<template><PopoverTrigger as-child><slot /></PopoverTrigger></template>