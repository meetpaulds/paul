import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cn } from '../../lib/utils'

/**
 * Slider — range value selector.
 *
 * @example
 * ```html
 * <paul-slider [min]="0" [max]="100" [(ngModel)]="volume" />
 * ```
 */
@Component({
  selector: 'paul-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      type="range"
      [min]="min"
      [max]="max"
      [step]="step"
      [value]="value"
      [disabled]="disabled"
      [class]="inputClass"
      (input)="onInput($event)"
    />
  `,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements ControlValueAccessor {
  @Input() min = 0
  @Input() max = 100
  @Input() step = 1
  @Input() value = 0
  @Input() disabled = false
  @Input() class = ''
  @Output() valueChange = new EventEmitter<number>()

  private onChange: (v: number) => void = () => {}
  private onTouched: () => void = () => {}

  get inputClass() {
    return cn('w-full h-11 cursor-pointer appearance-none rounded-full bg-primary/20 accent-primary', this.class)
  }

  onInput(e: Event) {
    const val = +(e.target as HTMLInputElement).value
    this.value = val
    this.onChange(val)
    this.onTouched()
    this.valueChange.emit(val)
  }

  writeValue(val: number) { this.value = val }
  registerOnChange(fn: (v: number) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
  setDisabledState(d: boolean) { this.disabled = d }
}
