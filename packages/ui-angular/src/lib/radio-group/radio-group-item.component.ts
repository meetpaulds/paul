import { Component, Input, HostListener, Optional, ChangeDetectionStrategy, HostBinding } from '@angular/core'
import { cn } from '../../lib/utils'
import { RadioGroupComponent } from './radio-group.component'

/** Individual radio button inside a RadioGroup. */
@Component({
  selector: 'paul-radio-group-item',
  standalone: true,
  template: `
    <span *ngIf="checked" class="flex h-full w-full items-center justify-center">
      <span class="h-2.5 w-2.5 rounded-full bg-primary block"></span>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupItemComponent {
  @Input() value = ''
  @Input() disabled = false
  @Input() class = ''

  constructor(@Optional() private group: RadioGroupComponent) {}

  get checked() { return this.group?.value === this.value }

  @HostBinding('attr.role') role = 'radio'
  @HostBinding('attr.aria-checked') get ariaChecked() { return this.checked }
  @HostBinding('class') get hostClass() {
    return cn(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center cursor-pointer',
      this.class
    )
  }

  @HostListener('click')
  onClick() { if (!this.disabled) this.group?.select(this.value) }
}
