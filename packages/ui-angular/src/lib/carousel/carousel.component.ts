import { Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({ selector: 'paul-carousel-item', standalone: true, template: `<div class="min-w-0 shrink-0 grow-0 basis-full pl-4"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class CarouselItemComponent {}

@Component({
  selector: 'paul-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <div class="overflow-hidden">
        <div class="flex -ml-4" [style.transform]="'translateX(-' + (current * 100) + '%)'">
          <ng-content />
        </div>
      </div>
      <button (click)="prev()" class="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border bg-background shadow hover:bg-accent" type="button" aria-label="Previous">‹</button>
      <button (click)="next()" class="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border bg-background shadow hover:bg-accent" type="button" aria-label="Next">›</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() total = 3
  current = 0
  prev() { if (this.current > 0) this.current-- }
  next() { if (this.current < this.total - 1) this.current++ }
}
