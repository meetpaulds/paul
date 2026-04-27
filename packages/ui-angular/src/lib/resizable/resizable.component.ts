import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'paul-resizable-panel-group',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="groupClass"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizablePanelGroupComponent {
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal'
  @Input() class = ''
  get groupClass() {
    return `flex h-full w-full data-[panel-group-direction=vertical]:flex-col ${this.direction === 'vertical' ? 'flex-col' : ''} ${this.class}`
  }
}

@Component({
  selector: 'paul-resizable-panel',
  standalone: true,
  template: `<div class="flex-1 overflow-auto"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizablePanelComponent {}

@Component({
  selector: 'paul-resizable-handle',
  standalone: true,
  template: `<div class="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:start-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizableHandleComponent {}
