import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

/**
 * Honeypot Field — invisible bot-trap as CAPTCHA-free spam prevention.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No cognitive challenge presented to users.
 * - `aria-hidden` removes it from the accessibility tree.
 * - `tabindex="-1"` prevents keyboard focus.
 *
 * Server side: reject any submission where this field is non-empty.
 *
 * @example
 * ```html
 * <paul-honeypot-field name="website" />
 * ```
 */
@Component({
  selector: 'paul-honeypot-field',
  standalone: true,
  template: `
    <div
      aria-hidden="true"
      style="position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none"
    >
      <label [attr.for]="'hp-' + name">Leave this field empty</label>
      <input
        [id]="'hp-' + name"
        type="text"
        [name]="name"
        tabindex="-1"
        autocomplete="off"
        value=""
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoneypotFieldComponent {
  @Input() name = 'website'
}
