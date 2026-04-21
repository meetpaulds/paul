import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

/**
 * Collapsible — expandable/collapsible content region.
 *
 * @example
 * ```html
 * <paul-collapsible [(open)]="isOpen">
 *   <paul-collapsible-trigger>Toggle</paul-collapsible-trigger>
 *   <paul-collapsible-content>Hidden content</paul-collapsible-content>
 * </paul-collapsible>
 * ```
 */
@Component({
  selector: 'paul-collapsible',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleComponent {
  @Input() open = false
  @Output() openChange = new EventEmitter<boolean>()
  toggle() { this.open = !this.open; this.openChange.emit(this.open) }
}
