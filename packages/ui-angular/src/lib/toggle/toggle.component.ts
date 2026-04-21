import { Component, Input, Output, EventEmitter, HostBinding, HostListener, forwardRef, ChangeDetectionStrategy } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * CVA variant config for ToggleComponent.
 *
 * @variant default - Transparent background; standard toggle.
 * @variant outline - Border with transparent background; shows accent on hover.
 */
const toggleVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: { default: 'bg-transparent', outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground' },
      size: { default: 'h-9 px-3', sm: 'h-8 px-2', lg: 'h-10 px-3' },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

/**
 * Toggle — a two-state button that can be pressed or unpressed.
 *
 * @example
 * ```html
 * <button paul-toggle [(pressed)]="isBold" aria-label="Bold">B</button>
 * ```
 */
@Component({
  selector: 'button[paul-toggle]',
  standalone: true,
  template: `<ng-content />`,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() pressed = false
  @Input() variant: 'default' | 'outline' = 'default'
  @Input() size: 'default' | 'sm' | 'lg' = 'default'
  @Input() class = ''
  @Output() pressedChange = new EventEmitter<boolean>()

  private onChange: (v: boolean) => void = () => {}
  private onTouched: () => void = () => {}

  @HostBinding('attr.aria-pressed') get ariaPressedAttr() { return this.pressed }
  @HostBinding('attr.data-state') get dataState() { return this.pressed ? 'on' : 'off' }
  @HostBinding('class') get hostClass() {
    return cn(
      toggleVariants({ variant: this.variant, size: this.size }),
      this.pressed ? 'bg-accent text-accent-foreground' : '',
      this.class
    )
  }

  @HostListener('click')
  onClick() {
    this.pressed = !this.pressed
    this.onChange(this.pressed)
    this.onTouched()
    this.pressedChange.emit(this.pressed)
  }

  writeValue(val: boolean) { this.pressed = val }
  registerOnChange(fn: (v: boolean) => void) { this.onChange = fn }
  registerOnTouched(fn: () => void) { this.onTouched = fn }
}
