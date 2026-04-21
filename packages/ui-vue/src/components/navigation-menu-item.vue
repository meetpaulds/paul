<script setup lang="ts">
import { ref, provide } from 'vue'
const open = ref(false)
provide('nav-item-open', open)
provide('nav-item-toggle', () => { open.value = !open.value })
provide('nav-item-close', () => { open.value = false })
</script>
<template>
  <li class="relative"><slot /></li>
</template>
