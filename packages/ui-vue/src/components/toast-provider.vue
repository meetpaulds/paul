<script setup lang="ts">
const props = defineProps<{
  as?: string | any
}>()
const tag = props.as || 'div'
</script>
<template><component :is="tag"><slot /></component></template>
