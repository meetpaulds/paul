<script setup lang="ts">
import { cn } from '@/lib/utils'

/**
 * ChartDataTable — a programmatically accessible data table alternative for charts.
 *
 * Place this alongside a ChartContainer to provide a text alternative for users
 * who cannot perceive the visual chart. When `srOnly` is true, the table is
 * visually hidden but fully accessible to screen readers.
 *
 * @example
 * ```vue
 * <ChartContainer :config="config">
 *   <BarChart :data="data" />
 * </ChartContainer>
 * <ChartDataTable
 *   caption="Monthly revenue for 2024"
 *   :headers="['Month', 'Revenue']"
 *   :rows="[['January', 4200], ['February', 3800]]"
 *   sr-only
 * />
 * ```
 *
 * @accessibility Satisfies WCAG 1.1.1 / EN 301 549 §9.1.1.1 — Non-text Content.
 * Also addresses WCAG 1.4.1 / §9.1.4.1 — Use of Colour.
 */
defineOptions({ name: 'ChartDataTable' })

const props = withDefaults(defineProps<{
  as?: string | any
  /** Column headers for the data table. */
  headers: string[]
  /** Row data — each row is an array of cell values matching the headers. */
  rows: (string | number)[][]
  /** Caption describing the chart data. Required for accessibility. */
  caption: string
  /** When true, the table is visually hidden but available to screen readers. @default false */
  srOnly?: boolean
  class?: string
}>(), {
  srOnly: false,
})
const tag = props.as || 'table'
</script>

<template>
  <component :is="tag" :class="cn(props.srOnly ? 'sr-only' : 'w-full text-sm', props.class)">
    <caption :class="cn('mb-2 text-left text-sm font-medium text-foreground', props.srOnly && 'sr-only')">
      {{ props.caption }}
    </caption>
    <thead>
      <tr>
        <th
          v-for="header in props.headers"
          :key="header"
          scope="col"
          class="border-b px-3 py-2 text-left font-medium text-muted-foreground"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in props.rows"
        :key="rowIndex"
        class="border-b last:border-0"
      >
        <td
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="px-3 py-2 text-foreground"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </component>
</template>
