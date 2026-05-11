import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../utils'

/**
 * FieldHelp — context-sensitive help for a form field.
 *
 * Renders an info icon with descriptive help text and an optional link to
 * more detailed documentation. Use inside a `paul-field` component below the input.
 *
 * @example
 * ```html
 * <paul-field label="Password" [required]="true">
 *   <input paul-input type="password" [(ngModel)]="password" />
 *   <paul-field-help href="/docs/password-requirements" linkText="View requirements">
 *     Must be at least 8 characters with one uppercase letter and one number.
 *   </paul-field-help>
 * </paul-field>
 * ```
 *
 * @accessibility Satisfies WCAG 3.3.5 / EN 301 549 §9.3.3.5 — Help.
 */
@Component({
  selector: 'paul-field-help',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cn('flex items-start gap-2 text-sm text-muted-foreground', class)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-0.5 shrink-0"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
      <span>
        <ng-content />
        <ng-container *ngIf="href">
          &nbsp;<a
            [href]="href"
            class="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            target="_blank"
            rel="noopener noreferrer"
          >{{ linkText }}</a>
        </ng-container>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldHelpComponent {
  @Input() href = ''
  @Input() linkText = 'Learn more'
  @Input() class = ''
  readonly cn = cn
}
