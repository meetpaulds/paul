<script setup lang="ts">
import { SelectTrigger, SelectValue, type SelectTriggerProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
/** Trigger button that opens the Select dropdown. Displays the selected value or a placeholder. */
defineOptions({ name: 'SelectTrigger' })
const props = defineProps<{ class?: string; placeholder?: string }>()
</script>
<template>
  <SelectTrigger v-bind="props" :class="cn('flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)">
    <SelectValue :placeholder="props.placeholder" /><ChevronDown class="h-4 w-4 opacity-50" />
  </SelectTrigger>
</template>