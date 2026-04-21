<script lang="ts">
  let { open = $bindable(false), class: className = '', ...props } = $props()
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black/80" onclick={() => (open = false)}></div>
    <div class={['relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg rounded-lg', className].join(' ')} {...props}>
      <slot />
    </div>
  </div>
{/if}
<slot name="trigger" {open} />
