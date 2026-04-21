import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/** Fallback initials or icon shown when AvatarImage cannot load. */
@Component({
  selector: 'paul-avatar-fallback',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarFallbackComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium', this.class)
  }
}
