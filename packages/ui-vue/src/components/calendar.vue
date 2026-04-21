<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ class?: string }>()
const modelValue = defineModel<Date | undefined>()

const today = new Date()
const viewYear = ref(today.getFullYear())
const viewMonth = ref(today.getMonth())

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

const title = computed(() => `${MONTHS[viewMonth.value]} ${viewYear.value}`)

const days = computed(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1).getDay()
  const total = new Date(viewYear.value, viewMonth.value + 1, 0).getDate()
  const cells: (number | null)[] = Array(first).fill(null)
  for (let d = 1; d <= total; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
})

function prevMonth() {
  if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- }
  else viewMonth.value--
}
function nextMonth() {
  if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ }
  else viewMonth.value++
}
function select(day: number | null) {
  if (!day) return
  modelValue.value = new Date(viewYear.value, viewMonth.value, day)
}
function isSelected(day: number | null) {
  if (!day || !modelValue.value) return false
  const d = modelValue.value
  return d.getFullYear() === viewYear.value && d.getMonth() === viewMonth.value && d.getDate() === day
}
function isToday(day: number | null) {
  if (!day) return false
  return today.getFullYear() === viewYear.value && today.getMonth() === viewMonth.value && today.getDate() === day
}
</script>

<template>
  <div :class="cn('p-3 rounded-md border', props.class)">
    <div class="flex items-center justify-between mb-2">
      <button @click="prevMonth" class="inline-flex items-center justify-center h-7 w-7 rounded-md border hover:bg-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <span class="text-sm font-medium">{{ title }}</span>
      <button @click="nextMonth" class="inline-flex items-center justify-center h-7 w-7 rounded-md border hover:bg-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
    <div class="grid grid-cols-7 gap-1 mb-1">
      <div v-for="d in DAYS" :key="d" class="text-center text-xs text-muted-foreground font-medium h-7 flex items-center justify-center">{{ d }}</div>
    </div>
    <div class="grid grid-cols-7 gap-1">
      <button
        v-for="(day, i) in days"
        :key="i"
        :disabled="!day"
        @click="select(day)"
        :class="cn(
          'h-8 w-8 rounded-md text-sm flex items-center justify-center transition-colors',
          !day ? 'invisible' : '',
          isSelected(day) ? 'bg-primary text-primary-foreground hover:bg-primary/90' : '',
          isToday(day) && !isSelected(day) ? 'bg-accent text-accent-foreground' : '',
          day && !isSelected(day) && !isToday(day) ? 'hover:bg-accent hover:text-accent-foreground' : ''
        )"
      >
        {{ day }}
      </button>
    </div>
  </div>
</template>
