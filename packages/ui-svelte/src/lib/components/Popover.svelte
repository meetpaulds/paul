<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(false), class: className = '', children, trigger, ...props }: { open?: boolean; class?: string; children?: Snippet; trigger?: Snippet<[{ open: boolean; toggle: () => void }]>; [key: string]: unknown } = $props()
</script>

<div class="relative inline-block">
  {@render trigger?.({ open, toggle: () => (open = !open) })}
  {#if open}
    <div class="fixed inset-0 z-40" role="presentation" onclick={() => (open = false)} onkeydown={(e) => e.key === 'Escape' && (open = false)}></div>
    <div class={['absolute z-50 mt-1 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', className].join(' ')} {...props}>
      {@render children?.()}
    </div>
  {/if}
</div>
