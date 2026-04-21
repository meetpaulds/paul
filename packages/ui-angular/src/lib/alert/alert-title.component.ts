import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Primary heading inside an Alert. */
@Component({
  selector: 'paul-alert-title',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertTitleComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('mb-1 font-medium leading-none tracking-tight', this.class)
  }
}
