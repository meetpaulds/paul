<script lang="ts">
  let { class: className = '', disabled = false, onclick, ...props } = $props()
</script>
<div role="menuitem" {onclick} class={['relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground', className].join(' ')} {...props}><slot /></div>
