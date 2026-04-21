import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Supporting description text rendered below DialogTitle. */
@Component({ selector: 'paul-dialog-description', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DialogDescriptionComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('text-sm text-muted-foreground', this.class) }
}
