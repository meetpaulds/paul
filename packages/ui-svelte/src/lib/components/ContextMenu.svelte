<script lang="ts">
  import { type Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet } = $props()
  let open = $state(false)
  let x = $state(0)
  let y = $state(0)

  function oncontextmenu(e: MouseEvent) {
    e.preventDefault()
    x = e.clientX
    y = e.clientY
    open = true
  }
</script>

<div {oncontextmenu} class={className} {...props}>
  {#if children}{@render children()}{/if}
</div>
{#if open}
  <div class="fixed inset-0 z-40" onclick={() => (open = false)}></div>
  <div class="fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md" style="left:{x}px;top:{y}px">
    <slot name="content" />
  </div>
{/if}
