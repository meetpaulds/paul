import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

/** Clickable header that toggles the accordion section. Rotates a ChevronDown icon when open. */
@Component({
  selector: 'paul-accordion-trigger',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="buttonClass"
      [attr.aria-expanded]="open"
      (click)="toggle()"
    >
      <ng-content />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16" height="16"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        [class]="iconClass"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionTriggerComponent {
  open = false

  get buttonClass() {
    return cn(
      'flex flex-1 w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline'
    )
  }

  get iconClass() {
    return cn(
      'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
      this.open ? 'rotate-180' : ''
    )
  }

  toggle() { this.open = !this.open }
}
