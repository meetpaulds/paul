import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * ScrollArea — custom scrollable container with styled scrollbars.
 *
 * @example
 * ```html
 * <paul-scroll-area class="h-72 w-48 rounded-md border">
 *   <div *ngFor="let item of items" class="p-4">{{ item }}</div>
 * </paul-scroll-area>
 * ```
 */
@Component({
  selector: 'paul-scroll-area',
  standalone: true,
  template: `
    <div class="relative overflow-hidden h-full w-full">
      <div class="h-full w-full overflow-auto scroll-py-1" tabindex="0">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollAreaComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() { return cn('relative overflow-hidden', this.class) }
}
