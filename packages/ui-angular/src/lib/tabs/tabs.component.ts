import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

/**
 * Tabs — tabbed interface for switching between related content panels.
 *
 * @example
 * ```html
 * <paul-tabs defaultValue="account">
 *   <paul-tabs-list>
 *     <paul-tabs-trigger value="account">Account</paul-tabs-trigger>
 *     <paul-tabs-trigger value="password">Password</paul-tabs-trigger>
 *   </paul-tabs-list>
 *   <paul-tabs-content value="account">Account settings here.</paul-tabs-content>
 *   <paul-tabs-content value="password">Password settings here.</paul-tabs-content>
 * </paul-tabs>
 * ```
 */
@Component({
  selector: 'paul-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input() defaultValue = ''
  @Input() value = ''
  @Output() valueChange = new EventEmitter<string>()

  activeValue = ''

  ngOnInit() { this.activeValue = this.value || this.defaultValue }

  select(val: string) {
    this.activeValue = val
    this.valueChange.emit(val)
  }
}
