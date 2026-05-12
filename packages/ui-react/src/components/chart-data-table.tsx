import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ChartDataTableProps extends React.HTMLAttributes<HTMLTableElement> {
  /** Column headers for the data table. */
  headers: string[]
  /** Row data — each row is an array of cell values matching the headers. */
  rows: (string | number)[][]
  /** Caption describing the chart data. Required for accessibility. */
  caption: string
  /** When true, the table is visually hidden but available to screen readers. @default false */
  srOnly?: boolean
}

/**
 * ChartDataTable — a programmatically accessible data table alternative for charts.
 *
 * Place this alongside a ChartContainer to provide a text alternative for users
 * who cannot perceive the visual chart. When `srOnly` is true, the table is
 * visually hidden but fully accessible to screen readers.
 *
 * @example
 * ```tsx
 * <ChartContainer config={config}>
 *   <BarChart data={data}>...</BarChart>
 * </ChartContainer>
 * <ChartDataTable
 *   caption="Monthly revenue for 2024"
 *   headers={['Month', 'Revenue']}
 *   rows={[['January', 4200], ['February', 3800]]}
 *   srOnly
 * />
 * ```
 *
 * @accessibility Satisfies WCAG 1.1.1 / EN 301 549 §9.1.1.1 — Non-text Content.
 * Also addresses WCAG 1.4.1 / §9.1.4.1 — Use of Colour.
 */
const ChartDataTable = React.forwardRef<HTMLTableElement, ChartDataTableProps>(
  ({ className, headers, rows, caption, srOnly = false, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={cn(srOnly ? 'sr-only' : 'w-full text-sm', className)}
        {...props}
      >
        <caption className={cn('mb-2 text-left text-sm font-medium text-foreground', srOnly && 'sr-only')}>
          {caption}
        </caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border-b px-3 py-2 text-left font-medium text-muted-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-2 text-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
)
ChartDataTable.displayName = 'ChartDataTable'

export { ChartDataTable }
