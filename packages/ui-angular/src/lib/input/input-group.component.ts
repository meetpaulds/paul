import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * InputGroup — combines an input with prefix/suffix addons.
 *
 * @example
 * ```html
 * <paul-input-group>
 *   <paul-input-group-text>https://</paul-input-group-text>
 *   <input paul-input placeholder="example.com" />
 * </paul-input-group>
 * ```
 */
@Component({ selector: 'paul-input-group', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class InputGroupComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('flex [&>input]:rounded-none [&>input:first-child]:rounded-s-md [&>input:last-child]:rounded-e-md', this.class)
  }
}
