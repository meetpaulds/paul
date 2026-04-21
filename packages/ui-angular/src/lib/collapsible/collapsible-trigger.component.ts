import { Component, HostListener, Optional, ChangeDetectionStrategy } from '@angular/core'
import { CollapsibleComponent } from './collapsible.component'

/** Trigger that toggles the Collapsible open or closed. */
@Component({
  selector: 'paul-collapsible-trigger',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleTriggerComponent {
  constructor(@Optional() private collapsible: CollapsibleComponent) {}
  @HostListener('click') onClick() { this.collapsible?.toggle() }
}
