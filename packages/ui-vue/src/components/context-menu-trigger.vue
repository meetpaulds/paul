<script setup lang="ts">
import { ContextMenuTrigger } from 'radix-vue'
/** Element that opens the ContextMenu on end-click. */
defineOptions({ name: 'ContextMenuTrigger' })
</script>
<template><ContextMenuTrigger><slot /></ContextMenuTrigger></template>