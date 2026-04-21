import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-context-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative" (contextmenu)="onContextMenu($event)">
      <ng-content select="[slot=trigger]" />
      <div *ngIf="open" [style.top.px]="y" [style.left.px]="x"
        class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 shadow-md">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  open = false
  x = 0
  y = 0
  onContextMenu(e: MouseEvent) {
    e.preventDefault()
    this.x = e.offsetX
    this.y = e.offsetY
    this.open = true
  }
}

@Component({ selector: 'paul-context-menu-item', standalone: true, template: `<div class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContextMenuItemComponent {}

@Component({ selector: 'paul-context-menu-label', standalone: true, template: `<div class="px-2 py-1.5 text-sm font-semibold text-foreground"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContextMenuLabelComponent {}

@Component({ selector: 'paul-context-menu-separator', standalone: true, template: `<div class="-mx-1 my-1 h-px bg-muted"></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContextMenuSeparatorComponent {}
