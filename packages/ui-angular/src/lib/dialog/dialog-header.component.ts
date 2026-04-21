import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Layout wrapper for the dialog title and description at the top. */
@Component({ selector: 'paul-dialog-header', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DialogHeaderComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('flex flex-col space-y-1.5 text-center sm:text-left', this.class) }
}
