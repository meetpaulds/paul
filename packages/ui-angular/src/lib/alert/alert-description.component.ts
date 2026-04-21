import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Supporting description text inside an Alert. */
@Component({
  selector: 'paul-alert-description',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDescriptionComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('text-sm [&_p]:leading-relaxed', this.class)
  }
}
