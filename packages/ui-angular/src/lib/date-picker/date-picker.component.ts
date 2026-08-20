import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CalendarComponent } from '../calendar/calendar.component'

@Component({
  selector: 'paul-date-picker',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  template: `
    <div class="relative inline-block">
      <button
        type="button"
        (click)="open = !open"
        [attr.aria-expanded]="open"
        aria-haspopup="dialog"
        class="flex h-11 w-64 items-center justify-start gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
        <span [class]="!selected ? 'text-muted-foreground' : ''">
          {{ formatted || placeholder }}
        </span>
      </button>
      <div *ngIf="open" role="dialog" aria-label="Date picker calendar" class="absolute z-50 mt-1 rounded-md border bg-popover shadow-md">
        <paul-calendar
          [selected]="selected"
          [locale]="locale"
          (selectedChange)="onSelect($event)"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements OnChanges {
  @Input() selected?: Date
  @Input() placeholder = 'Pick a date'
  @Input() locale?: string
  @Output() selectedChange = new EventEmitter<Date | undefined>()

  open = false
  formatted = ''

  constructor(private cdr: ChangeDetectorRef) {
    this.updateFormatted()
  }

  ngOnChanges(): void {
    this.updateFormatted()
    this.cdr.markForCheck()
  }

  private resolvedLocale(): string {
    return this.locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')
  }

  private updateFormatted(): void {
    this.formatted = this.selected
      ? new Intl.DateTimeFormat(this.resolvedLocale(), { day: 'numeric', month: 'long', year: 'numeric' }).format(this.selected)
      : ''
  }

  onSelect(date: Date): void {
    this.selected = date
    this.updateFormatted()
    this.open = false
    this.selectedChange.emit(date)
    this.cdr.markForCheck()
  }
}
