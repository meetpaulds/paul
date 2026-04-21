<script lang="ts">
  interface ToastItem { id: number; message: string; type?: string }
  let { class: className = '', ...props } = $props()
  let toasts = $state<ToastItem[]>([])
  let nextId = 0

  export function toast(message: string, type = 'default') {
    const id = nextId++
    toasts = [...toasts, { id, message, type }]
    setTimeout(() => { toasts = toasts.filter(t => t.id !== id) }, 4000)
  }
</script>

<div class={['fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 pointer-events-none', className].join(' ')} {...props}>
  {#each toasts as t (t.id)}
    <div class={['pointer-events-auto flex items-center gap-3 rounded-md border bg-background px-4 py-3 shadow-lg text-sm', t.type === 'destructive' ? 'border-destructive text-destructive' : ''].join(' ')}>
      {t.message}
    </div>
  {/each}
</div>
