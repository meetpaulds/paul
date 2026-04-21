import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

interface ToastItem { id: number; message: string }

@Component({
  selector: 'paul-sonner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-80">
      <div *ngFor="let t of toasts" class="flex items-center justify-between rounded-md border bg-background px-4 py-3 shadow-lg text-sm">
        <span>{{ t.message }}</span>
        <button (click)="dismiss(t.id)" class="ml-4 text-muted-foreground hover:text-foreground">✕</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SonnerComponent {
  toasts: ToastItem[] = []
  private nextId = 0

  toast(message: string) {
    const id = ++this.nextId
    this.toasts = [...this.toasts, { id, message }]
    setTimeout(() => this.dismiss(id), 4000)
  }

  dismiss(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id)
  }
}
