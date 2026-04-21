import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Static text addon rendered inside an InputGroup as a prefix or suffix. */
@Component({ selector: 'paul-input-group-text', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class InputGroupTextComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('flex items-center rounded-md border border-input bg-muted px-3 text-sm text-muted-foreground', this.class)
  }
}
