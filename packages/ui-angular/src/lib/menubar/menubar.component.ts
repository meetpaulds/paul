import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

@Component({ selector: 'paul-menubar', standalone: true, template: `<div class="flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MenubarComponent {}

@Component({
  selector: 'paul-menubar-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <ng-content select="paul-menubar-trigger" />
      <div *ngIf="open" class="absolute left-0 top-full z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 shadow-md">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarMenuComponent {
  open = false
  toggle() { this.open = !this.open }
}

@Component({ selector: 'paul-menubar-trigger', standalone: true, template: `<button class="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground"><ng-content /></button>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MenubarTriggerComponent {}

@Component({ selector: 'paul-menubar-item', standalone: true, template: `<div class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MenubarItemComponent {}

@Component({ selector: 'paul-menubar-separator', standalone: true, template: `<div class="-mx-1 my-1 h-px bg-muted"></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MenubarSeparatorComponent {}

@Component({ selector: 'paul-menubar-label', standalone: true, template: `<div class="px-2 py-1.5 text-sm font-semibold"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MenubarLabelComponent {}
