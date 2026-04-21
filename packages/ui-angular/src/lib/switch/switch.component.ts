import { Component, Input, Output, EventEmitter, HostBinding, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cn } from '../../lib/utils'

/**
 * Switch — toggle switch for binary on/off settings.
 *
 * @example
 * ```html
 * <paul-switch id="airplane" [(ngModel)]="airplaneMode" />
 * <label paul-label for="airplane">Airplane Mode</label>
 * ```
 */
@Component({
  selector: 'paul-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      role="switch"
      [attr.aria-checked]="checked"
      [attr.data-state]="checked ? 'checked' : 'unchecked'"
      [disabled]="disabled || null"
      [class]="trackClass"
      (click)="toggle()"
    >
      <span [class]="thumbClass"></span>
    </button>
  `,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SwitchComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() checked = false
  @Input() disabled = false
  @Input() class = ''
  @Output() checkedChange = new EventEmitter<boolean>()

  private onChange: (v: boolean) => void = () => {}
  private onTouched: () => void = () => {}

  get trackClass() {
    return cn(
      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
      this.checked ? 'bg-primary' : 'bg-input',
      this.class
    )
  }
  get thumbClass() {
    return cn(
      'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
      this.checked ? 'translate-x-4' : 'translate-x-0'
    )
  }

  toggle() {
    if (this.disabled) return
    this.checked = !this.checked
    this.onChange(this.checked)
    this.onTouched()
    this.checkedChange.emit(this.checked)
  }

  writeValue(val: boolean) { this.checked = val }
  registerOnChange(fn: (v: boolean) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
  setDisabledState(d: boolean) { this.disabled = d }
}
