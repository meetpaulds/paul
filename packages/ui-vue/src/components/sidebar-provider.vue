<script setup lang="ts">
import { ref, provide } from 'vue'
const open = ref(true)
provide('sidebar-open', open)
provide('sidebar-toggle', () => { open.value = !open.value })
</script>
<template><div class="flex h-full"><slot /></div></template>
