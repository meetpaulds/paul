<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(false), class: className = '', children, trigger, ...props }: { open?: boolean; class?: string; children?: Snippet; trigger?: Snippet<[{ toggle: () => void }]>; [key: string]: unknown } = $props()
</script>
<div class={['relative', className].join(' ')} {...props}>
  {@render trigger?.({ toggle: () => (open = !open) })}
  {#if open}
    <div class="fixed inset-0 z-40" role="presentation" onclick={() => (open = false)} onkeydown={(e) => e.key === 'Escape' && (open = false)}></div>
    <div class="absolute left-0 z-50 mt-1 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
      {@render children?.()}
    </div>
  {/if}
</div>
