<script setup lang="ts">
import { ref, provide } from 'vue'
const open = ref(false)
provide('drawer-open', open)
provide('drawer-close', () => { open.value = false })
provide('drawer-toggle', () => { open.value = !open.value })
</script>
<template><slot /></template>
