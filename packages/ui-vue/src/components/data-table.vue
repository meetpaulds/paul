<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '../lib/utils'

interface Column { key: string; header: string }
const props = defineProps<{
  columns?: Column[]
  data?: Record<string, unknown>[]
  class?: string
}>()

const filterValue = ref('')
const cols = computed(() => props.columns ?? [])
const rows = computed(() => {
  const d = props.data ?? []
  if (!filterValue.value) return d
  return d.filter(row =>
    Object.values(row).some(v =>
      String(v).toLowerCase().includes(filterValue.value.toLowerCase())
    )
  )
})
</script>

<template>
  <div :class="cn('w-full', props.class)">
    <div class="flex items-center py-4">
      <input
        v-model="filterValue"
        placeholder="Filter..."
        class="flex h-10 max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
    <div class="rounded-md border">
      <table class="w-full caption-bottom text-sm">
        <thead class="[&_tr]:border-b">
          <tr class="border-b transition-colors hover:bg-muted/50">
            <th v-for="col in cols" :key="col.key" class="h-10 px-2 text-start align-middle font-medium text-muted-foreground">
              {{ col.header }}
            </th>
          </tr>
        </thead>
        <tbody class="[&_tr:last-child]:border-0">
          <tr v-for="(row, i) in rows" :key="i" class="border-b transition-colors hover:bg-muted/50">
            <td v-for="col in cols" :key="col.key" class="p-2 align-middle">
              {{ row[col.key] }}
            </td>
          </tr>
          <tr v-if="rows.length === 0">
            <td :colspan="cols.length" class="h-24 text-center text-sm text-muted-foreground">No results.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-end py-4 text-sm text-muted-foreground">
      {{ rows.length }} row(s)
    </div>
  </div>
</template>
