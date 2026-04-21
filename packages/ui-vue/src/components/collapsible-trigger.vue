<script setup lang="ts">
import { CollapsibleTrigger } from 'radix-vue'
/** Trigger button that toggles the Collapsible open or closed. */
defineOptions({ name: 'CollapsibleTrigger' })
</script>
<template><CollapsibleTrigger><slot /></CollapsibleTrigger></template>