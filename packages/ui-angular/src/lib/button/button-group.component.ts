import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * ButtonGroup — renders a horizontal group of buttons with merged borders.
 *
 * @example
 * ```html
 * <paul-button-group>
 *   <button paul-button variant="outline">Left</button>
 *   <button paul-button variant="outline">Middle</button>
 *   <button paul-button variant="outline">Right</button>
 * </paul-button-group>
 * ```
 */
@Component({
  selector: 'paul-button-group',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('flex [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none', this.class)
  }
}
