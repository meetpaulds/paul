<script lang="ts">
  let { open = $bindable(true), side = 'left', class: className = '', ...props } = $props()
</script>

<div class="flex h-full">
  {#if open}
    <div class={['flex h-full w-[--sidebar-width,16rem] flex-col border-r bg-sidebar text-sidebar-foreground', side === 'right' ? 'order-last border-l border-r-0' : '', className].join(' ')} {...props}>
      <slot />
    </div>
  {/if}
  <div class="flex-1 overflow-auto">
    <slot name="content" />
  </div>
</div>
