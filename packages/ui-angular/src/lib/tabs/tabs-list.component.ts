import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Container for TabsTrigger buttons, styled as a segmented control. */
@Component({ selector: 'paul-tabs-list', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TabsListComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground', this.class)
  }
  @HostBinding('attr.role') role = 'tablist'
}
