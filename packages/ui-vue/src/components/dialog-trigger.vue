<script setup lang="ts">
import { DialogTrigger } from 'radix-vue'
/** Element that opens the Dialog when clicked. Renders its child via `as-child`. */
defineOptions({ name: 'DialogTrigger' })
</script>
<template><DialogTrigger as-child><slot /></DialogTrigger></template>