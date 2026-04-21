<script lang="ts">
  let { class: className = '', onclick, ...props } = $props()
</script>
<button {onclick} class={['flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className].join(' ')} {...props}><slot /></button>
