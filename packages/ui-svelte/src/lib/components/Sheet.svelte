<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(false), side = 'right', class: className = '', children, ...props }: { open?: boolean; side?: string; class?: string; children?: Snippet; [key: string]: unknown } = $props()

  const sideClass: Record<string, string> = {
    top: 'inset-x-0 top-0 border-b',
    bottom: 'inset-x-0 bottom-0 border-t',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50">
    <div class="fixed inset-0 bg-black/80" role="presentation" onclick={() => (open = false)} onkeydown={(e) => e.key === 'Escape' && (open = false)}></div>
    <div class={['fixed z-50 bg-background p-6 shadow-lg transition ease-in-out', sideClass[side] ?? sideClass.right, className].join(' ')} {...props}>
        {@render children?.()}
    </div>
  </div>
{/if}
