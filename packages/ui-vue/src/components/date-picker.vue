<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '../lib/utils'
import Calendar from './calendar.vue'

const props = defineProps<{ placeholder?: string; class?: string; locale?: string }>()
const modelValue = defineModel<Date | undefined>()
const open = ref(false)

const resolvedLocale = computed(() =>
  props.locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')
)

const formatted = computed(() =>
  modelValue.value
    ? new Intl.DateTimeFormat(resolvedLocale.value, { day: 'numeric', month: 'long', year: 'numeric' }).format(modelValue.value)
    : null
)

function onSelect(d: Date | undefined) {
  modelValue.value = d
  open.value = false
}
</script>

<template>
  <div :class="cn('relative', props.class)">
    <button
      @click="open = !open"
      class="flex h-10 w-60 items-center justify-start gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
      <span :class="!formatted ? 'text-muted-foreground' : ''">{{ formatted ?? (props.placeholder ?? 'Pick a date') }}</span>
    </button>
    <div v-if="open" class="absolute z-50 mt-1">
      <Calendar :model-value="modelValue" :locale="resolvedLocale" @update:model-value="onSelect" />
    </div>
  </div>
</template>
