import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cn } from '../../lib/utils'

/**
 * RadioGroup — single-selection control for choosing one option from a set.
 *
 * @example
 * ```html
 * <paul-radio-group [(ngModel)]="plan">
 *   <paul-radio-group-item value="starter" id="starter" />
 *   <label paul-label for="starter">Starter</label>
 * </paul-radio-group>
 * ```
 */
@Component({
  selector: 'paul-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioGroupComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() value = ''
  @Input() class = ''
  @Output() valueChange = new EventEmitter<string>()

  private onChange: (v: string) => void = () => {}
  private onTouched: () => void = () => {}

  select(val: string) {
    this.value = val
    this.onChange(val)
    this.onTouched()
    this.valueChange.emit(val)
  }

  writeValue(val: string) { this.value = val }
  registerOnChange(fn: (v: string) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
}
