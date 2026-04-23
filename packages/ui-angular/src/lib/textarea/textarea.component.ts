import { Component, Input, HostBinding, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cn } from '../../lib/utils'

/**
 * Textarea — multi-line text input with consistent focus styling.
 *
 * @example
 * ```html
 * <textarea paul-textarea placeholder="Tell us about yourself." [(ngModel)]="bio"></textarea>
 * ```
 */
@Component({
  selector: 'textarea[paul-textarea]',
  standalone: true,
  template: ``,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextareaComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn(
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      this.class
    )
  }
  private onChange: (v: unknown) => void = () => {}
  private onTouched: () => void = () => {}
  writeValue() {}
  registerOnChange(fn: (v: unknown) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
}
