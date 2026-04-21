import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Primary heading inside CardHeader. */
@Component({ selector: 'paul-card-title', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CardTitleComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('font-semibold leading-none tracking-tight', this.class) }
}
