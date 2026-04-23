import { Component, Input, Output, EventEmitter, OnDestroy, TemplateRef, ViewChild, ChangeDetectionStrategy, inject, ViewContainerRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay'
import { TemplatePortal, PortalModule } from '@angular/cdk/portal'
import { A11yModule } from '@angular/cdk/a11y'

@Component({
  selector: 'paul-sheet',
  standalone: true,
  imports: [CommonModule, OverlayModule, PortalModule, A11yModule],
  template: `
    <ng-template #tpl>
      <div class="fixed inset-0 z-50 bg-black/80" (click)="close()"></div>
      <div cdkTrapFocus [cdkTrapFocusAutoCapture]="true" role="dialog" aria-modal="true"
        class="fixed inset-y-0 right-0 z-50 h-full w-3/4 max-w-sm border-l bg-background p-6 shadow-lg animate-in slide-in-from-right"
        (keydown.escape)="close()">
        <ng-content />
        <button (click)="close()" class="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          <span class="sr-only">Close</span>
        </button>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetComponent implements OnDestroy {
  private overlay = inject(Overlay)
  private vcr = inject(ViewContainerRef)
  private overlayRef?: OverlayRef
  @ViewChild('tpl') tpl!: TemplateRef<unknown>
  private _open = false
  @Input() set open(val: boolean) { this._open = val; val ? this.show() : this.hide() }
  get open() { return this._open }
  @Output() openChange = new EventEmitter<boolean>()
  show() {
    if (this.overlayRef) return
    this.overlayRef = this.overlay.create({ hasBackdrop: false, scrollStrategy: this.overlay.scrollStrategies.block() })
    this.overlayRef.attach(new TemplatePortal(this.tpl, this.vcr))
  }
  hide() { this.overlayRef?.detach(); this.overlayRef?.dispose(); this.overlayRef = undefined }
  close() { this.openChange.emit(false) }
  ngOnDestroy() { this.hide() }
}
