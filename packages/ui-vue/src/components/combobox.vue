<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '../lib/utils'

interface Option { value: string; label: string }
const props = defineProps<{
  options?: Option[]
  placeholder?: string
  class?: string
}>()
const modelValue = defineModel<string>({ default: '' })

const open = ref(false)
const search = ref('')

const filtered = computed(() =>
  (props.options ?? []).filter(o =>
    o.label.toLowerCase().includes(search.value.toLowerCase())
  )
)

const selectedLabel = computed(() =>
  (props.options ?? []).find(o => o.value === modelValue.value)?.label
)

function select(val: string) {
  modelValue.value = val
  open.value = false
  search.value = ''
}
</script>

<template>
  <div :class="cn('relative w-48', props.class)">
    <button
      role="combobox"
      :aria-expanded="open"
      @click="open = !open"
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span>{{ selectedLabel ?? props.placeholder ?? 'Select...' }}</span>
      <svg class="ml-2 h-4 w-4 shrink-0 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
    </button>
    <div v-if="open" class="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
      <div class="p-1">
        <input
          v-model="search"
          class="flex h-8 w-full rounded-sm bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground"
          placeholder="Search..."
        />
      </div>
      <div class="max-h-48 overflow-auto p-1">
        <div
          v-for="opt in filtered"
          :key="opt.value"
          role="option"
          :aria-selected="modelValue === opt.value"
          @click="select(opt.value)"
          class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
        >
          <svg v-if="modelValue === opt.value" class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
          <span :class="modelValue !== opt.value ? 'pl-6' : ''">{{ opt.label }}</span>
        </div>
        <div v-if="filtered.length === 0" class="py-6 text-center text-sm text-muted-foreground">No results found.</div>
      </div>
    </div>
  </div>
</template>
