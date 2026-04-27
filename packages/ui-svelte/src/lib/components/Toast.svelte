<script lang="ts">
  import type { Snippet } from 'svelte'
  let { variant = 'default', open = $bindable(true), class: className = '', children, ...props }: { variant?: string; open?: boolean; class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>

{#if open}
  <div class={['group pointer-events-auto relative flex w-full items-center justify-between gap-x-4 overflow-hidden rounded-md border p-6 pe-8 shadow-lg transition-all', variant === 'destructive' ? 'destructive border-destructive bg-destructive text-destructive-foreground' : 'border bg-background text-foreground', className].join(' ')} {...props}>
    {@render children?.()}
  </div>
{/if}
