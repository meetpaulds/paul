import { Component, Input, HostBinding, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cn } from '../../lib/utils'

/**
 * Input — single-line text input with consistent focus styling.
 *
 * @example
 * ```html
 * <input paul-input type="email" placeholder="you@example.com" [(ngModel)]="email" />
 * ```
 */
@Component({
  selector: 'input[paul-input]',
  standalone: true,
  template: ``,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      this.class
    )
  }
  private onChange: (v: unknown) => void = () => {}
  private onTouched: () => void = () => {}
  writeValue() {}
  registerOnChange(fn: (v: unknown) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
}
