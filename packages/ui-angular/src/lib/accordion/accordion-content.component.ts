import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

/** Collapsible content panel rendered below AccordionTrigger. */
@Component({
  selector: 'paul-accordion-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="open" class="overflow-hidden text-sm">
      <div class="pb-4 pt-0">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContentComponent {
  @Input() open = false
}
