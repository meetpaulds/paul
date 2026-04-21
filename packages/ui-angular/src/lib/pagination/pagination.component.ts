import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

@Component({ selector: 'paul-pagination', standalone: true, template: `<nav role="navigation" aria-label="pagination" class="mx-auto flex w-full justify-center"><ng-content /></nav>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class PaginationComponent {}

@Component({ selector: 'paul-pagination-content', standalone: true, template: `<ul class="flex flex-row items-center gap-1"><ng-content /></ul>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class PaginationContentComponent {}

@Component({ selector: 'paul-pagination-item', standalone: true, template: `<li><ng-content /></li>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class PaginationItemComponent {}

@Component({
  selector: 'paul-pagination-link',
  standalone: true,
  imports: [CommonModule],
  template: `<a [attr.aria-current]="isActive ? 'page' : null" [class]="linkClass"><ng-content /></a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationLinkComponent {
  @Input() isActive = false
  @Input() class = ''
  get linkClass() {
    return cn('inline-flex items-center justify-center rounded-md border text-sm h-9 w-9 hover:bg-accent', this.isActive ? 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary' : 'bg-background', this.class)
  }
}

@Component({ selector: 'paul-pagination-previous', standalone: true, template: `<a class="inline-flex h-9 items-center gap-1 px-3 text-sm rounded-md border hover:bg-accent"><span>«</span><span>Previous</span></a>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class PaginationPreviousComponent {}

@Component({ selector: 'paul-pagination-next', standalone: true, template: `<a class="inline-flex h-9 items-center gap-1 px-3 text-sm rounded-md border hover:bg-accent"><span>Next</span><span>»</span></a>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class PaginationNextComponent {}

@Component({ selector: 'paul-pagination-ellipsis', standalone: true, template: `<span aria-hidden="true" class="flex h-9 w-9 items-center justify-center">…</span>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class PaginationEllipsisComponent {}
