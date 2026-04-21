<script setup lang="ts">
import { TabsRoot, type TabsRootProps } from 'radix-vue'
/**
 * Tabs — tabbed interface for switching between related content panels.
 *
 * @example
 * ```vue
 * <Tabs default-value="account">
 *   <TabsList>
 *     <TabsTrigger value="account">Account</TabsTrigger>
 *     <TabsTrigger value="password">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="account">Account settings here.</TabsContent>
 *   <TabsContent value="password">Password settings here.</TabsContent>
 * </Tabs>
 * ```
 *
 * @accessibility Arrow keys move between tabs. Panels are associated via `aria-controls`/`aria-labelledby`.
 */
defineOptions({ name: 'Tabs' })
const props = defineProps<{}>()
</script>
<template><TabsRoot v-bind="props"><slot /></TabsRoot></template>