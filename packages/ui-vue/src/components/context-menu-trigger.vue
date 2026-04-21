<script setup lang="ts">
import { ContextMenuTrigger } from 'radix-vue'
/** Element that opens the ContextMenu on right-click. */
defineOptions({ name: 'ContextMenuTrigger' })
</script>
<template><ContextMenuTrigger><slot /></ContextMenuTrigger></template>