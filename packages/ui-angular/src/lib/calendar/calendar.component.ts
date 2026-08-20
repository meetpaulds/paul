import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-3">
      <div class="flex items-center justify-between mb-2">
        <button (click)="prevMonth()" aria-label="Previous month" class="inline-flex items-center justify-center h-11 w-11 rounded-md border hover:bg-accent text-sm">‹</button>
        <span class="text-sm font-medium">{{ monthLabel }}</span>
        <button (click)="nextMonth()" aria-label="Next month" class="inline-flex items-center justify-center h-11 w-11 rounded-md border hover:bg-accent text-sm">›</button>
      </div>
      <div class="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-1">
        <span *ngFor="let d of dayNames">{{ d }}</span>
      </div>
      <div class="grid grid-cols-7 gap-1">
        <span *ngFor="let _ of leadingBlanks"></span>
        <button *ngFor="let day of daysInMonth"
          (click)="selectDay(day)"
          [class]="getDayClass(day)"
          type="button">
          {{ day }}
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnChanges {
  @Input() selected?: Date
  @Input() locale?: string
  @Output() selectedChange = new EventEmitter<Date>()

  today = new Date()
  viewYear = new Date().getFullYear()
  viewMonth = new Date().getMonth()
  dayNames: string[] = []

  constructor(private cdr: ChangeDetectorRef) {
    this.computeLocale()
  }

  ngOnChanges(): void {
    this.computeLocale()
    this.cdr.markForCheck()
  }

  private resolvedLocale(): string {
    return this.locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')
  }

  private getWeekStart(loc: string): number {
    try {
      const info = (new Intl.Locale(loc) as unknown as { weekInfo?: { firstDay: number } }).weekInfo
      if (info) return info.firstDay
    } catch { /* ignore */ }
    const table: Record<string, number> = { de: 1, fr: 1, it: 1, es: 1, ar: 0, en: 0 }
    return table[loc.split('-')[0]] ?? 0
  }

  private computeLocale(): void {
    const loc = this.resolvedLocale()
    const ws = this.getWeekStart(loc)
    this._weekStart = ws
    const fmt = new Intl.DateTimeFormat(loc, { weekday: 'short' })
    const sunBased = Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 7 + i)))
    this.dayNames = [...sunBased.slice(ws), ...sunBased.slice(0, ws)]
  }

  private _weekStart = 0

  get monthLabel(): string {
    return new Intl.DateTimeFormat(this.resolvedLocale(), { month: 'long', year: 'numeric' })
      .format(new Date(this.viewYear, this.viewMonth, 1))
  }

  get daysInMonth(): number[] {
    return Array.from({ length: new Date(this.viewYear, this.viewMonth + 1, 0).getDate() }, (_, i) => i + 1)
  }

  get leadingBlanks(): unknown[] {
    const firstDow = new Date(this.viewYear, this.viewMonth, 1).getDay()
    return Array.from({ length: (firstDow - this._weekStart + 7) % 7 })
  }

  prevMonth(): void { if (this.viewMonth === 0) { this.viewMonth = 11; this.viewYear-- } else this.viewMonth-- }
  nextMonth(): void { if (this.viewMonth === 11) { this.viewMonth = 0; this.viewYear++ } else this.viewMonth++ }

  selectDay(day: number): void {
    this.selected = new Date(this.viewYear, this.viewMonth, day)
    this.selectedChange.emit(this.selected)
  }

  isSelected(day: number): boolean {
    return !!(this.selected && this.selected.getFullYear() === this.viewYear && this.selected.getMonth() === this.viewMonth && this.selected.getDate() === day)
  }

  getDayClass(day: number): string {
    return `inline-flex h-11 w-11 items-center justify-center rounded-md text-sm hover:bg-accent ${this.isSelected(day) ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`
  }
}
