import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

@Component({
  selector: 'paul-toast-viewport',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:end-0 sm:top-auto sm:flex-col md:max-w-[420px]"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastViewportComponent {}

@Component({
  selector: 'paul-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="open" [class]="toastClass" role="status" aria-live="polite">
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  @Input() open = true
  @Output() openChange = new EventEmitter<boolean>()
  @Input() variant: 'default' | 'destructive' = 'default'
  @Input() class = ''
  get toastClass() {
    return cn(
      'group pointer-events-auto relative flex w-full items-center justify-between gap-x-2 overflow-hidden rounded-md border p-4 pe-6 shadow-lg transition-all',
      this.variant === 'destructive' ? 'destructive border-destructive bg-destructive text-destructive-foreground' : 'border bg-background text-foreground',
      this.class
    )
  }
}

@Component({ selector: 'paul-toast-title', standalone: true, template: `<div class="text-sm font-semibold [&+div]:text-xs"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class ToastTitleComponent {}

@Component({ selector: 'paul-toast-description', standalone: true, template: `<div class="text-sm opacity-90"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class ToastDescriptionComponent {}
