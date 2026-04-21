<script lang="ts">
  import type { Snippet } from 'svelte'
  let { openDelay = 700, class: className = '', children, trigger, ...props }: { openDelay?: number; class?: string; children?: Snippet; trigger?: Snippet; [key: string]: unknown } = $props()
  let open = $state(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  function onmouseenter() {
    timer = setTimeout(() => (open = true), openDelay)
  }
  function onmouseleave() {
    clearTimeout(timer)
    open = false
  }
</script>

<div class="relative inline-block" role="group" {onmouseenter} {onmouseleave}>
  {@render trigger?.()}
  {#if open}
    <div class={['absolute z-50 mt-1 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', className].join(' ')} {...props}>
      {@render children?.()}
    </div>
  {/if}
</div>
