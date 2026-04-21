<script setup lang="ts">
import { SwitchRoot, SwitchThumb, type SwitchRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Switch — toggle switch for binary on/off settings.
 *
 * @example
 * ```vue
 * <Switch id="airplane" v-model:checked="airplaneMode" />
 * <Label for="airplane">Airplane Mode</Label>
 * ```
 *
 * @accessibility Backed by Radix Vue SwitchRoot. Reports `role="switch"` with `aria-checked`.
 */
defineOptions({ name: 'Switch' })
const props = defineProps<{ class?: string }>()
</script>
<template>
  <SwitchRoot v-bind="props" :class="cn('peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input', props.class)">
    <SwitchThumb class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
  </SwitchRoot>
</template>