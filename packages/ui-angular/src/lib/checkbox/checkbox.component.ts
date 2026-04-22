import { Component, Input, Output, EventEmitter, HostBinding, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cn } from '../../lib/utils'

/**
 * Checkbox — accessible checkbox control.
 *
 * @example
 * ```html
 * <paul-checkbox id="terms" [(ngModel)]="accepted" />
 * <label for="terms">Accept terms</label>
 * ```
 *
 * @accessibility Touch target is 24×24px (WCAG 2.5.8 AA). For strict AAA (44×44px),
 *   wrap with a larger clickable area or use inside a `<label>` that extends the hit region.
 */
@Component({
  selector: 'paul-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      role="checkbox"
      [attr.aria-checked]="checked"
      [attr.data-state]="checked ? 'checked' : 'unchecked'"
      [disabled]="disabled || null"
      [class]="btnClass"
      (click)="toggle()"
    >
      <span *ngIf="checked" class="flex items-center justify-center text-current">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    </button>
  `,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() checked = false
  @Input() disabled = false
  @Input() class = ''
  @Output() checkedChange = new EventEmitter<boolean>()

  private onChange: (v: boolean) => void = () => {}
  private onTouched: () => void = () => {}

  get btnClass() {
    return cn(
      'peer h-6 w-6 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      this.class
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
