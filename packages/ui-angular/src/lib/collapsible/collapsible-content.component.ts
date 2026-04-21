import { Component, Optional, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CollapsibleComponent } from './collapsible.component'

/** Hidden content area of a Collapsible. */
@Component({
  selector: 'paul-collapsible-content',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content *ngIf="collapsible?.open" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleContentComponent {
  constructor(@Optional() public collapsible: CollapsibleComponent) {}
}
