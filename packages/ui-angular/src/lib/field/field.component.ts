import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

/**
 * Field — form field wrapper wiring a label, hint, and error to its input.
 *
 * @example
 * ```html
 * <paul-field label="Email" hint="We'll never share your email." [error]="errors.email" [required]="true">
 *   <input paul-input type="email" [(ngModel)]="email" />
 * </paul-field>
 * ```
 */
@Component({
  selector: 'paul-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-1.5">
      <label *ngIf="label" [for]="fieldId" class="text-sm font-medium leading-none">
        {{ label }}<span *ngIf="required" class="text-destructive-text ml-0.5" aria-hidden="true">*</span>
      </label>
      <ng-content />
      <p *ngIf="hint && !error" [id]="hintId" class="text-sm text-muted-foreground">{{ hint }}</p>
      <p *ngIf="error" [id]="errorId" class="text-sm text-destructive-text" role="alert">{{ error }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {
  @Input() label = ''
  @Input() hint = ''
  @Input() error = ''
  @Input() required = false
  @Input() fieldId = `field-${Math.random().toString(36).slice(2, 9)}`

  get hintId() { return `${this.fieldId}-hint` }
  get errorId() { return `${this.fieldId}-error` }
  get describedBy() { return this.error ? this.errorId : this.hint ? this.hintId : undefined }
}
