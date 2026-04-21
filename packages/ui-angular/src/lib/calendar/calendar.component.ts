import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-3">
      <div class="flex items-center justify-between mb-2">
        <button (click)="prevMonth()" class="inline-flex items-center justify-center h-7 w-7 rounded-md border hover:bg-accent text-sm">‹</button>
        <span class="text-sm font-medium">{{ monthLabel }}</span>
        <button (click)="nextMonth()" class="inline-flex items-center justify-center h-7 w-7 rounded-md border hover:bg-accent text-sm">›</button>
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
export class CalendarComponent {
  @Input() selected?: Date
  @Output() selectedChange = new EventEmitter<Date>()

  today = new Date()
  viewYear = new Date().getFullYear()
  viewMonth = new Date().getMonth()

  dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  get monthLabel() {
    return new Date(this.viewYear, this.viewMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }
  get daysInMonth() {
    return Array.from({ length: new Date(this.viewYear, this.viewMonth + 1, 0).getDate() }, (_, i) => i + 1)
  }
  get leadingBlanks() {
    return Array.from({ length: new Date(this.viewYear, this.viewMonth, 1).getDay() })
  }
  prevMonth() { if (this.viewMonth === 0) { this.viewMonth = 11; this.viewYear-- } else this.viewMonth-- }
  nextMonth() { if (this.viewMonth === 11) { this.viewMonth = 0; this.viewYear++ } else this.viewMonth++ }
  selectDay(day: number) {
    this.selected = new Date(this.viewYear, this.viewMonth, day)
    this.selectedChange.emit(this.selected)
  }
  isSelected(day: number) {
    return this.selected && this.selected.getFullYear() === this.viewYear && this.selected.getMonth() === this.viewMonth && this.selected.getDate() === day
  }
  getDayClass(day: number) {
    return `inline-flex h-8 w-8 items-center justify-center rounded-md text-sm hover:bg-accent ${this.isSelected(day) ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`
  }
}
