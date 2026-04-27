<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(false), side = 'right', class: className = '', children, ...props }: { open?: boolean; side?: string; class?: string; children?: Snippet; [key: string]: unknown } = $props()

  const sideClass: Record<string, string> = {
    top: 'inset-x-0 top-0 border-b',
    bottom: 'inset-x-0 bottom-0 border-t',
    left: 'inset-y-0 start-0 h-full w-3/4 border-e sm:max-w-sm',
    right: 'inset-y-0 end-0 h-full w-3/4 border-s sm:max-w-sm',
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50">
    <div class="fixed inset-0 bg-black/80" role="presentation" onclick={() => (open = false)} onkeydown={(e) => e.key === 'Escape' && (open = false)}></div>
    <div class={['fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out print:shadow-none print:rounded-none print:border-black print:text-black', sideClass[side] ?? sideClass.right, className].join(' ')} {...props}>
        {@render children?.()}
        <button onclick={() => (open = false)} class="absolute end-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span class="sr-only">Close</span>
        </button>
    </div>
  </div>
{/if}
