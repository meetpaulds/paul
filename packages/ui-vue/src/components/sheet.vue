<script setup lang="ts">
import { ref, provide } from 'vue'

const open = ref(false)
provide('sheet-open', open)
provide('sheet-close', () => { open.value = false })
provide('sheet-toggle', () => { open.value = !open.value })
</script>

<template>
  <slot :open="open" />
</template>
