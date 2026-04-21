import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block">
      <div (click)="open = !open">
        <ng-content select="[slot=trigger]" />
      </div>
      <div *ngIf="open" class="absolute left-0 top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 shadow-md animate-in fade-in-0 zoom-in-95">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  open = false
}

@Component({ selector: 'paul-dropdown-menu-label', standalone: true, template: `<div class="px-2 py-1.5 text-sm font-semibold"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DropdownMenuLabelComponent {}

@Component({ selector: 'paul-dropdown-menu-item', standalone: true, template: `<div class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DropdownMenuItemComponent {}

@Component({ selector: 'paul-dropdown-menu-separator', standalone: true, template: `<div class="-mx-1 my-1 h-px bg-muted"></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class DropdownMenuSeparatorComponent {}
