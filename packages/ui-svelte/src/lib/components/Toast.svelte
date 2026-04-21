<script lang="ts">
  let { variant = 'default', open = $bindable(true), class: className = '', ...props } = $props()
</script>

{#if open}
  <div class={['group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all', variant === 'destructive' ? 'destructive border-destructive bg-destructive text-destructive-foreground' : 'border bg-background text-foreground', className].join(' ')} {...props}>
    <slot />
  </div>
{/if}
