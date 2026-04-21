<script lang="ts">
  let { open = $bindable(false), class: className = '', ...props } = $props()
</script>
<div class={['relative', className].join(' ')} {...props}>
  <slot name="trigger" toggle={() => (open = !open)} />
  {#if open}
    <div class="fixed inset-0 z-40" onclick={() => (open = false)}></div>
    <div class="absolute left-0 z-50 mt-1 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
      <slot />
    </div>
  {/if}
</div>
