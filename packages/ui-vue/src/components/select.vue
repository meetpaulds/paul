<script setup lang="ts">
import { SelectRoot, type SelectRootProps } from 'radix-vue'
/**
 * Select — dropdown selection backed by Radix Vue.
 *
 * @example
 * ```vue
 * <Select v-model="value">
 *   <SelectTrigger placeholder="Pick a fruit" />
 *   <SelectContent>
 *     <SelectItem value="apple">Apple</SelectItem>
 *     <SelectItem value="banana">Banana</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 *
 * @accessibility Keyboard-navigable with Arrow keys. Escape closes. Search by typing.
 */
defineOptions({ name: 'Select' })
const props = defineProps<{}>()
</script>
<template><SelectRoot v-bind="props"><slot /></SelectRoot></template>