import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Main body area of a Card. */
@Component({ selector: 'paul-card-content', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CardContentComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('p-6 pt-0', this.class) }
}
