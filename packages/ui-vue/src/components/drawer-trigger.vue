<script setup lang="ts">
import { inject } from 'vue'
const toggle = inject<() => void>('drawer-toggle')!
</script>
<template><span @click="toggle" style="display:contents"><slot /></span></template>
