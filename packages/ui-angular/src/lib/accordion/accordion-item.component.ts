import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

/** A single accordion section. Requires a unique `value` prop. */
@Component({
  selector: 'paul-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent {
  @Input() value!: string
  @HostBinding('class') get hostClass() { return 'block border-b' }
  open = false
}
