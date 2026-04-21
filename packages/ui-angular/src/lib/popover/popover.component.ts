import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-popover',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block">
      <div (click)="open = !open">
        <ng-content select="[slot=trigger]" />
      </div>
      <div *ngIf="open" class="absolute left-0 top-full z-50 mt-2 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  open = false
}
