import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy, forwardRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms'
import { cn } from '../../lib/utils'

@Component({
  selector: 'paul-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <select [class]="hostClass" [(ngModel)]="value" (ngModelChange)="onChange($event)" (blur)="onTouched()">
      <ng-content />
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() class = ''
  @Input() placeholder = 'Select...'
  value = ''
  onChange: (v: string) => void = () => {}
  onTouched: () => void = () => {}
  get hostClass() {
    return cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50', this.class)
  }
  writeValue(v: string) { this.value = v }
  registerOnChange(fn: (v: string) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
}

@Component({ selector: 'paul-select-item', standalone: true, template: `<option [value]="value"><ng-content /></option>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class SelectItemComponent {
  @Input() value = ''
}
