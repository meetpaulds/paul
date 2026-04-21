import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Bottom section of a Card, typically containing action buttons. */
@Component({ selector: 'paul-card-footer', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CardFooterComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('flex items-center p-6 pt-0', this.class) }
}
