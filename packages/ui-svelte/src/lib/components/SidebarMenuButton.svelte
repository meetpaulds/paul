<script lang="ts">
  import type { Snippet } from 'svelte'
  let { isActive = false, class: className = '', onclick, children, ...props} = $props()
</script>
<button type="button" {onclick} data-active={isActive || undefined} class={['peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground', className].join(' ')} {...props}>{@render children?.()}</button>
