import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Accessible title for the dialog, announced by screen readers. */
@Component({ selector: 'paul-dialog-title', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DialogTitleComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('text-lg font-semibold leading-none tracking-tight', this.class) }
}
