<script setup lang="ts">
import { ref, provide } from 'vue'
const open = ref(false)
provide('alert-dialog-open', open)
provide('alert-dialog-close', () => { open.value = false })
provide('alert-dialog-toggle', () => { open.value = !open.value })
</script>
<template><slot /></template>
