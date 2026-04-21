<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps } from 'radix-vue'
/** Wraps a MenubarTrigger and its MenubarContent into a single menu entry. */
defineOptions({ name: 'MenubarMenu' })
const props = defineProps<{}>()
</script>
<template><MenubarMenu v-bind="props"><slot /></MenubarMenu></template>