import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { cn } from '../../lib/utils'

@Component({
  selector: 'paul-chart-container',
  standalone: true,
  template: `<div [class]="containerClass"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartContainerComponent {
  @Input() class = ''
  get containerClass() {
    return cn('flex aspect-video justify-center text-xs', this.class)
  }
}

@Component({
  selector: 'paul-chart-tooltip',
  standalone: true,
  template: `<div class="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartTooltipComponent {}
