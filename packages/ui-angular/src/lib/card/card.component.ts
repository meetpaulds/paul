import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * Card — styled surface container with border, background, and shadow.
 *
 * @example
 * ```html
 * <paul-card>
 *   <paul-card-header>
 *     <paul-card-title>Account</paul-card-title>
 *     <paul-card-description>Manage your settings.</paul-card-description>
 *   </paul-card-header>
 *   <paul-card-content>...</paul-card-content>
 *   <paul-card-footer><button paul-button>Save</button></paul-card-footer>
 * </paul-card>
 * ```
 */
@Component({
  selector: 'paul-card',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('rounded-xl border bg-card text-card-foreground shadow print:shadow-none print:rounded-none print:border-black print:text-black', this.class)
  }
}
