import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * AspectRatio — constrains its child to a specific width-to-height ratio.
 *
 * @example
 * ```html
 * <paul-aspect-ratio [ratio]="16/9">
 *   <img src="..." alt="..." class="object-cover w-full h-full" />
 * </paul-aspect-ratio>
 * ```
 */
@Component({
  selector: 'paul-aspect-ratio',
  standalone: true,
  template: `
    <div [style.padding-bottom.%]="paddingBottom" class="relative w-full">
      <div class="absolute inset-0">
        <ng-content />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioComponent {
  @Input() ratio = 16 / 9
  @Input() class = ''
  get paddingBottom() { return (1 / this.ratio) * 100 }
  @HostBinding('class') get hostClass() { return cn('block', this.class) }
}
