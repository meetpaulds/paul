<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(false), class: className = '', children, trigger, ...props }: { open?: boolean; class?: string; children?: Snippet; trigger?: Snippet<[{ open: boolean }]>; [key: string]: unknown } = $props()
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black/80" role="presentation" onclick={() => (open = false)} onkeydown={(e) => e.key === 'Escape' && (open = false)}></div>
    <div class={['relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg rounded-lg', className].join(' ')} {...props}>
        {@render children?.()}
    </div>
  </div>
{/if}
{@render trigger?.({ open })}
