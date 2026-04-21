import { Component, Input, HostBinding, Optional, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'
import { TabsComponent } from './tabs.component'

/** Content panel shown when its matching tab is active. */
@Component({
  selector: 'paul-tabs-content',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content *ngIf="active" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsContentComponent {
  @Input() value = ''
  @Input() class = ''

  constructor(@Optional() private tabs: TabsComponent) {}

  get active() { return this.tabs?.activeValue === this.value }

  @HostBinding('attr.role') role = 'tabpanel'
  @HostBinding('attr.data-state') get dataState() { return this.active ? 'active' : 'inactive' }
  @HostBinding('class') get hostClass() {
    return cn('mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring', this.class)
  }
}
