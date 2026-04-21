import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'paul-command',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
      <div class="flex items-center border-b px-3">
        <span class="mr-2 shrink-0 opacity-50">⌕</span>
        <input [(ngModel)]="search" placeholder="Type a command or search..."
          class="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" />
      </div>
      <div class="max-h-[300px] overflow-y-auto overflow-x-hidden">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandComponent {
  search = ''
}

@Component({
  selector: 'paul-command-group',
  standalone: true,
  template: `
    <div class="overflow-hidden p-1 text-foreground">
      <div *ngIf="heading" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">{{ heading }}</div>
      <ng-content />
    </div>
  `,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandGroupComponent {
  @Input() heading = ''
}

@Component({ selector: 'paul-command-item', standalone: true, template: `<div class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CommandItemComponent {}

@Component({ selector: 'paul-command-separator', standalone: true, template: `<div class="-mx-1 h-px bg-border"></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CommandSeparatorComponent {}
