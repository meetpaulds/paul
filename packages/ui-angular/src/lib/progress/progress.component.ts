import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

/**
 * Progress — linear progress bar.
 *
 * @example
 * ```html
 * <paul-progress [value]="75" />
 * ```
 */
@Component({
  selector: 'paul-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      role="progressbar"
      [attr.aria-valuenow]="value"
      [attr.aria-valuemin]="0"
      [attr.aria-valuemax]="max"
      [class]="trackClass"
    >
      <div [class]="fillClass" [style.width.%]="pct"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() value = 0
  @Input() max = 100
  @Input() class = ''
  get pct() { return Math.min(100, Math.max(0, (this.value / this.max) * 100)) }
  get trackClass() { return cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', this.class) }
  get fillClass() { return 'h-full bg-primary transition-all' }
}
