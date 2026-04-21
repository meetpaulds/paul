import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * Avatar — container for user avatars. Combine with paul-avatar-image and paul-avatar-fallback.
 *
 * @example
 * ```html
 * <paul-avatar>
 *   <paul-avatar-image src="https://github.com/shadcn.png" alt="@shadcn" />
 *   <paul-avatar-fallback>SC</paul-avatar-fallback>
 * </paul-avatar>
 * ```
 */
@Component({
  selector: 'paul-avatar',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', this.class)
  }
}
