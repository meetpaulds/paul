<script setup lang="ts">
import { inject } from 'vue'
const close = inject<() => void>('sheet-close')!
</script>
<template>
  <span @click="close" style="display: contents"><slot /></span>
</template>
