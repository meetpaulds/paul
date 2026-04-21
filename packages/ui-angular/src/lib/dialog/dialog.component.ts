import { Component, Input, Output, EventEmitter, OnDestroy, TemplateRef, ViewChild, ChangeDetectionStrategy, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay'
import { TemplatePortal, PortalModule } from '@angular/cdk/portal'
import { ViewContainerRef } from '@angular/core'
import { A11yModule } from '@angular/cdk/a11y'
import { cn } from '../../lib/utils'

/**
 * Dialog — modal window backed by Angular CDK Overlay with focus trapping.
 *
 * @example
 * ```html
 * <paul-dialog [(open)]="showDialog">
 *   <ng-template paulDialogContent>
 *     <paul-dialog-header>
 *       <paul-dialog-title>Edit Profile</paul-dialog-title>
 *     </paul-dialog-header>
 *     <paul-dialog-footer>
 *       <button paul-button (click)="showDialog = false">Close</button>
 *     </paul-dialog-footer>
 *   </ng-template>
 * </paul-dialog>
 * ```
 *
 * @accessibility Focus is trapped inside the dialog. Pressing Escape closes it.
 */
@Component({
  selector: 'paul-dialog',
  standalone: true,
  imports: [CommonModule, OverlayModule, PortalModule, A11yModule],
  template: `
    <ng-template #dialogTpl>
      <div class="fixed inset-0 z-50 bg-black/80 animate-in fade-in-0" (click)="onOverlayClick($event)"></div>
      <div
        cdkTrapFocus
        [cdkTrapFocusAutoCapture]="true"
        role="dialog"
        [attr.aria-modal]="true"
        [attr.aria-labelledby]="titleId"
        [class]="panelClass"
        (keydown.escape)="close()"
      >
        <ng-content />
        <button
          type="button"
          [class]="closeClass"
          aria-label="Close"
          (click)="close()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          <span class="sr-only">Close</span>
        </button>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnDestroy {
  private overlay = inject(Overlay)
  private vcr = inject(ViewContainerRef)
  private overlayRef?: OverlayRef

  @ViewChild('dialogTpl') dialogTpl!: TemplateRef<unknown>
  @Input() titleId = 'dialog-title'
  @Input() class = ''

  private _open = false
  @Input() set open(val: boolean) {
    this._open = val
    val ? this.show() : this.hide()
  }
  get open() { return this._open }
  @Output() openChange = new EventEmitter<boolean>()

  get panelClass() {
    return cn(
      'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg sm:rounded-lg animate-in fade-in-0 zoom-in-95',
      this.class
    )
  }
  get closeClass() {
    return 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  }

  show() {
    if (this.overlayRef) return
    this.overlayRef = this.overlay.create({ hasBackdrop: false, scrollStrategy: this.overlay.scrollStrategies.block() })
    const portal = new TemplatePortal(this.dialogTpl, this.vcr)
    this.overlayRef.attach(portal)
  }

  hide() {
    this.overlayRef?.detach()
    this.overlayRef?.dispose()
    this.overlayRef = undefined
  }

  close() { this.openChange.emit(false) }

  onOverlayClick(e: MouseEvent) { this.close() }

  ngOnDestroy() { this.hide() }
}
