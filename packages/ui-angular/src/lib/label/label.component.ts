import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * Label — accessible form label.
 *
 * @example
 * ```html
 * <label paul-label for="email">Email address</label>
 * <input paul-input id="email" type="email" />
 * ```
 */
@Component({
  selector: 'label[paul-label]',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', this.class)
  }
}
