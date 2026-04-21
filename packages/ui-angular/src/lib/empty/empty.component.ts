import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

/**
 * Empty — empty state placeholder with icon, title, description, and action slots.
 *
 * @example
 * ```html
 * <paul-empty title="No results" description="Try adjusting your filters.">
 *   <ng-container slot="icon"><!-- icon here --></ng-container>
 * </paul-empty>
 * ```
 */
@Component({
  selector: 'paul-empty',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="hostClass">
      <div class="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ng-content select="[slot=icon]" />
      </div>
      <div *ngIf="title" class="text-xl font-semibold">{{ title }}</div>
      <div *ngIf="description" class="text-sm text-muted-foreground text-center">{{ description }}</div>
      <ng-content select="[slot=action]" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent {
  @Input() title = ''
  @Input() description = ''
  @Input() class = ''
  get hostClass() { return cn('flex flex-col items-center justify-center gap-4 py-16 text-center', this.class) }
}
