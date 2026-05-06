import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'paul-input-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative flex items-center gap-2" (click)="realInput.focus()">
      <input #realInput
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        [maxlength]="maxLength"
        [value]="value"
        (input)="onRealInput($event)"
        [attr.aria-label]="'Enter one-time password, ' + maxLength + ' digits'"
        class="sr-only"
      />
      <div *ngFor="let i of slots; let idx = index"
        aria-hidden="true"
        [class]="getSlotClass(idx)"
      >{{ getSlot(idx) }}<span *ngIf="idx === value.length" class="pointer-events-none absolute inset-0 flex items-center justify-center"><span class="animate-caret-blink h-4 w-px bg-foreground duration-1000"></span></span></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOTPComponent {
  @Input() maxLength = 6
  @Input() value = ''
  @Output() valueChange = new EventEmitter<string>()

  get slots() { return Array.from({ length: this.maxLength }, (_, i) => i) }
  getSlot(i: number) { return this.value[i] ?? '' }

  getSlotClass(idx: number) {
    const active = idx === this.value.length
    return [
      'relative flex h-11 w-11 items-center justify-center border-y border-r border-input text-sm transition-all',
      idx === 0 ? 'rounded-l-md border-l' : '',
      idx === this.maxLength - 1 ? 'rounded-r-md' : '',
      active ? 'z-10 ring-2 ring-ring ring-offset-background' : '',
    ].join(' ')
  }

  onRealInput(e: Event) {
    const val = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, this.maxLength)
    this.value = val
    this.valueChange.emit(this.value)
  }
}
