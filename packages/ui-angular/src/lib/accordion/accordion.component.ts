import { Component, Input, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccordionItemComponent } from './accordion-item.component'

/**
 * Accordion — root container that manages a list of collapsible sections.
 * Set `type="single"` (default) or `type="multiple"` to allow multiple open items.
 *
 * @example
 * ```html
 * <paul-accordion type="single">
 *   <paul-accordion-item value="item-1">
 *     <paul-accordion-trigger>Is it accessible?</paul-accordion-trigger>
 *     <paul-accordion-content>Yes. It uses ARIA attributes.</paul-accordion-content>
 *   </paul-accordion-item>
 * </paul-accordion>
 * ```
 */
@Component({
  selector: 'paul-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  /** Allow one or multiple items to be open simultaneously. */
  @Input() type: 'single' | 'multiple' = 'single'
  /** When type="single", allow the open item to be collapsed again. */
  @Input() collapsible = false
}
