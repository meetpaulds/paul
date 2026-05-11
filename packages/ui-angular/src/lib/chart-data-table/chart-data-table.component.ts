import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../utils'

/**
 * ChartDataTable — a programmatically accessible data table alternative for charts.
 *
 * Place this alongside a ChartContainer to provide a text alternative for users
 * who cannot perceive the visual chart. When `srOnly` is true, the table is
 * visually hidden but fully accessible to screen readers.
 *
 * @example
 * ```html
 * <paul-chart-container [config]="config">...</paul-chart-container>
 * <paul-chart-data-table
 *   caption="Monthly revenue for 2024"
 *   [headers]="['Month', 'Revenue']"
 *   [rows]="[['January', 4200], ['February', 3800]]"
 *   [srOnly]="true"
 * />
 * ```
 *
 * @accessibility Satisfies WCAG 1.1.1 / EN 301 549 §9.1.1.1 — Non-text Content.
 * Also addresses WCAG 1.4.1 / §9.1.4.1 — Use of Colour.
 */
@Component({
  selector: 'paul-chart-data-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table [class]="tableClass">
      <caption [class]="captionClass">{{ caption }}</caption>
      <thead>
        <tr>
          <th
            *ngFor="let header of headers"
            scope="col"
            class="border-b px-3 py-2 text-left font-medium text-muted-foreground"
          >{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows" class="border-b last:border-0">
          <td *ngFor="let cell of row" class="px-3 py-2 text-foreground">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartDataTableComponent {
  @Input() headers: string[] = []
  @Input() rows: (string | number)[][] = []
  @Input() caption = ''
  @Input() srOnly = false
  @Input() class = ''

  get tableClass() {
    return cn(this.srOnly ? 'sr-only' : 'w-full text-sm', this.class)
  }

  get captionClass() {
    return cn('mb-2 text-left text-sm font-medium text-foreground', this.srOnly && 'sr-only')
  }
}
