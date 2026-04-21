<script setup lang="ts">
import { inject } from 'vue'
const toggle = inject<() => void>('alert-dialog-toggle')!
</script>
<template><span @click="toggle" style="display:contents"><slot /></span></template>
