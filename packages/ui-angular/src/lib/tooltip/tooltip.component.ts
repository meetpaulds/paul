import { Directive, Input, HostListener, OnDestroy, inject, ViewContainerRef, TemplateRef, Component, ChangeDetectionStrategy } from '@angular/core'
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay'
import { TemplatePortal, PortalModule } from '@angular/cdk/portal'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

/**
 * Tooltip directive — attach to any element to show a tooltip on hover/focus.
 *
 * @example
 * ```html
 * <button paul-button [paulTooltip]="'Save changes'" aria-label="Save">
 *   <svg .../>
 * </button>
 * ```
 */
@Directive({
  selector: '[paulTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnDestroy {
  @Input('paulTooltip') content = ''
  @Input() tooltipSide: 'top' | 'bottom' | 'left' | 'right' = 'top'

  private overlay = inject(Overlay)
  private vcr = inject(ViewContainerRef)
  private overlayRef?: OverlayRef

  @HostListener('mouseenter') @HostListener('focus') show() {
    if (this.overlayRef) return
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(this.vcr.element)
        .withPositions([{ originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -6 }]),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    })
    const el = document.createElement('div')
    el.className = cn('z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95')
    el.textContent = this.content
    el.setAttribute('role', 'tooltip')
    this.overlayRef.overlayElement.appendChild(el)
  }

  @HostListener('mouseleave') @HostListener('blur') hide() {
    this.overlayRef?.detach()
    this.overlayRef?.dispose()
    this.overlayRef = undefined
  }

  ngOnDestroy() { this.hide() }
}
