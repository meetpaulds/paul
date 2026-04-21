import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Secondary supporting text inside CardHeader. */
@Component({ selector: 'paul-card-description', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CardDescriptionComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('text-sm text-muted-foreground', this.class) }
}
