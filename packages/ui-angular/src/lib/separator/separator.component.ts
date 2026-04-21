import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * Separator — a visual divider between content sections.
 *
 * @example
 * ```html
 * <paul-separator />
 * <paul-separator orientation="vertical" class="h-6" />
 * ```
 */
@Component({
  selector: 'paul-separator',
  standalone: true,
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal'
  @Input() decorative = true
  @Input() class = ''
  @HostBinding('attr.role') get role() { return this.decorative ? 'none' : 'separator' }
  @HostBinding('attr.aria-orientation') get ariaOrientation() { return this.orientation }
  @HostBinding('class') get hostClass() {
    return cn(
      'shrink-0 bg-border',
      this.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      this.class
    )
  }
}
