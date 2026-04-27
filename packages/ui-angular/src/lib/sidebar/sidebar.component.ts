import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex h-full">
      <aside *ngIf="open" [class]="sideClass">
        <ng-content select="[slot=sidebar]" />
      </aside>
      <main class="flex-1 overflow-auto">
        <ng-content />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() open = true
  @Input() side: 'left' | 'right' = 'left'
  get sideClass() {
    return `flex flex-col h-full w-64 border-r bg-sidebar text-sidebar-foreground print:hidden ${this.side === 'right' ? 'order-last border-l border-r-0' : ''}`
  }
}

@Component({ selector: 'paul-sidebar-header', standalone: true, template: `<div class="flex flex-col gap-2 p-2"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class SidebarHeaderComponent {}

@Component({ selector: 'paul-sidebar-content', standalone: true, template: `<div class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class SidebarContentComponent {}

@Component({ selector: 'paul-sidebar-menu', standalone: true, template: `<ul class="flex w-full min-w-0 flex-col gap-1"><ng-content /></ul>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class SidebarMenuComponent {}

@Component({ selector: 'paul-sidebar-menu-item', standalone: true, template: `<li class="group/menu-item relative"><ng-content /></li>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class SidebarMenuItemComponent {}

@Component({
  selector: 'paul-sidebar-menu-button',
  standalone: true,
  template: `<button class="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8"><ng-content /></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuButtonComponent {}
