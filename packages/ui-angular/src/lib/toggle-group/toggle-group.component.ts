import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-toggle-group',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex items-center justify-center gap-1" role="group"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleGroupComponent {
  @Input() type: 'single' | 'multiple' = 'single'
  @Input() value = ''
  @Output() valueChange = new EventEmitter<string>()
}

@Component({
  selector: 'paul-toggle-group-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" [class]="itemClass" [attr.data-state]="active ? 'on' : 'off'" [attr.aria-pressed]="active" (click)="toggle()">
      <ng-content />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleGroupItemComponent {
  @Input() value = ''
  @Input() active = false
  @Output() activeChange = new EventEmitter<boolean>()
  get itemClass() {
    return `inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3 transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 ${this.active ? 'bg-accent text-accent-foreground' : ''}`
  }
  toggle() { this.active = !this.active; this.activeChange.emit(this.active) }
}
