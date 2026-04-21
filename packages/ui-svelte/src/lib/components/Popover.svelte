<script lang="ts">
  let { open = $bindable(false), class: className = '', ...props } = $props()
</script>

<div class="relative inline-block">
  <slot name="trigger" {open} toggle={() => (open = !open)} />
  {#if open}
    <div class="fixed inset-0 z-40" onclick={() => (open = false)}></div>
    <div class={['absolute z-50 mt-1 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', className].join(' ')} {...props}>
      <slot />
    </div>
  {/if}
</div>
