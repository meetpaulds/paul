<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(true), side = 'left', class: className = '', children, content, ...props }: { open?: boolean; side?: string; class?: string; children?: Snippet; content?: Snippet; [key: string]: unknown } = $props()
</script>

<div class="flex h-full">
  {#if open}
    <div class={['flex h-full w-[--sidebar-width,16rem] flex-col border-e bg-sidebar text-sidebar-foreground print:hidden', side === 'right' ? 'order-last border-s border-e-0' : '', className].join(' ')} {...props}>
        {@render children?.()}
    </div>
  {/if}
  <div class="flex-1 overflow-auto">
    {@render content?.()}
  </div>
</div>
