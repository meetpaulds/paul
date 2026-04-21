import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

/**
 * Kbd — displays keyboard shortcut keys.
 *
 * @example
 * ```html
 * <span>Press <paul-kbd>⌘</paul-kbd> + <paul-kbd>K</paul-kbd></span>
 * ```
 */
@Component({ selector: 'paul-kbd', standalone: true, template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush })
export class KbdComponent {
  @Input() class = ''
  @HostBinding('class') get hostClass() {
    return cn('pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100', this.class)
  }
}
