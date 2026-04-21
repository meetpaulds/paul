<script setup lang="ts">
import { inject, Ref } from 'vue'

const toggle = inject<() => void>('sheet-toggle')!
</script>

<template>
  <span @click="toggle" style="display: contents">
    <slot />
  </span>
</template>
