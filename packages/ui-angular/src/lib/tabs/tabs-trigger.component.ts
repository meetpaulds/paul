import { Component, Input, HostBinding, HostListener, Optional, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'
import { TabsComponent } from './tabs.component'

/** Tab button that activates its associated TabsContent panel. */
@Component({
  selector: 'paul-tabs-trigger',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsTriggerComponent {
  @Input() value = ''
  @Input() disabled = false
  @Input() class = ''

  constructor(@Optional() private tabs: TabsComponent) {}

  get active() { return this.tabs?.activeValue === this.value }

  @HostBinding('attr.role') role = 'tab'
  @HostBinding('attr.aria-selected') get ariaSelected() { return this.active }
  @HostBinding('attr.data-state') get dataState() { return this.active ? 'active' : 'inactive' }
  @HostBinding('class') get hostClass() {
    return cn(
      'inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      this.active ? 'bg-background text-foreground shadow' : '',
      this.class
    )
  }

  @HostListener('click')
  onClick() {
    if (!this.disabled) this.tabs?.select(this.value)
  }
}
