import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-hover-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block" (mouseenter)="open = true" (mouseleave)="open = false">
      <ng-content select="[slot=trigger]" />
      <div *ngIf="open" class="absolute left-0 top-full z-50 mt-2 w-64 rounded-md border bg-popover p-4 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverCardComponent {
  open = false
}
