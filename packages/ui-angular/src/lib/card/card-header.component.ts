import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Top section of a Card, containing CardTitle and CardDescription. */
@Component({ selector: 'paul-card-header', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CardHeaderComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('flex flex-col space-y-1.5 p-6', this.class) }
}
