import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

/** Image element inside an Avatar. Shows the fallback if the image fails to load. */
@Component({
  selector: 'paul-avatar-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      *ngIf="!error"
      [src]="src"
      [alt]="alt"
      [class]="imgClass"
      (error)="error = true"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarImageComponent {
  @Input() src = ''
  @Input() alt = ''
  @Input() class = ''
  error = false
  get imgClass() { return cn('aspect-square h-full w-full', this.class) }
}
