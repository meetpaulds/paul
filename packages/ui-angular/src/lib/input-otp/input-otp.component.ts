import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'paul-input-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex items-center gap-2" (paste)="onPaste($event)">
      <input *ngFor="let i of slots; let idx = index"
        [value]="getSlot(idx)"
        (input)="onInput($event, idx)"
        (keydown)="onKeydown($event, idx)"
        maxlength="1"
        autocomplete="one-time-code"
        class="flex h-9 w-9 rounded-md border border-input bg-transparent text-center text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        [attr.id]="'otp-' + idx"
      />
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

  onInput(e: Event, idx: number) {
    const input = e.target as HTMLInputElement
    const char = input.value.slice(-1)
    const arr = this.value.split('')
    arr[idx] = char
    this.value = arr.join('').slice(0, this.maxLength)
    this.valueChange.emit(this.value)
    if (char && idx < this.maxLength - 1) {
      const next = document.getElementById(`otp-${idx + 1}`)
      next?.focus()
    }
  }

  onKeydown(e: KeyboardEvent, idx: number) {
    if (e.key === 'Backspace' && !this.getSlot(idx) && idx > 0) {
      const prev = document.getElementById(`otp-${idx - 1}`)
      prev?.focus()
    }
  }

  onPaste(e: ClipboardEvent) {
    e.preventDefault()
    const pasted = e.clipboardData?.getData('text')?.replace(/\D/g, '').slice(0, this.maxLength) ?? ''
    this.value = pasted
    this.valueChange.emit(this.value)
  }
}
