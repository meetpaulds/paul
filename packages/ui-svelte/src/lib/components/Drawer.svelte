<script lang="ts">
  import type { Snippet } from 'svelte'
  let { open = $bindable(false), class: className = '', children, ...props }: { open?: boolean; class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>

{#if open}
  <div class="fixed inset-0 z-50">
    <div class="fixed inset-0 bg-black/80" role="presentation" onclick={() => (open = false)} onkeydown={(e) => e.key === 'Escape' && (open = false)}></div>
    <div class={['fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background', className].join(' ')} {...props}>
      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"></div>
      {@render children?.()}
    </div>
  </div>
{/if}
