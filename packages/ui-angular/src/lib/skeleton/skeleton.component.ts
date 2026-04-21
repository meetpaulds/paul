import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * Skeleton — animated loading placeholder.
 *
 * @example
 * ```html
 * <paul-skeleton class="h-4 w-[250px]" />
 * <paul-skeleton class="h-12 w-12 rounded-full" />
 * ```
 */
@Component({
  selector: 'paul-skeleton',
  standalone: true,
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('animate-pulse rounded-md bg-primary/10', this.class)
  }
}
