import { Component, Input, Output, EventEmitter, OnDestroy, TemplateRef, ViewChild, ChangeDetectionStrategy, inject, ViewContainerRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay'
import { TemplatePortal, PortalModule } from '@angular/cdk/portal'
import { A11yModule } from '@angular/cdk/a11y'

@Component({
  selector: 'paul-alert-dialog',
  standalone: true,
  imports: [CommonModule, OverlayModule, PortalModule, A11yModule],
  template: `
    <ng-template #tpl>
      <div class="fixed inset-0 z-50 bg-black/80" (click)="close()"></div>
      <div cdkTrapFocus [cdkTrapFocusAutoCapture]="true" role="alertdialog" aria-modal="true"
        class="fixed start-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg sm:rounded-lg"
        (keydown.escape)="close()">
        <ng-content />
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogComponent implements OnDestroy {
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
