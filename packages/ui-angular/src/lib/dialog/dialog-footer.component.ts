import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Layout wrapper for action buttons at the bottom of the dialog. */
@Component({ selector: 'paul-dialog-footer', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DialogFooterComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', this.class) }
}
