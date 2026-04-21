<script lang="ts">
  let { value = '', pressed = $bindable(false), class: className = '', onclick, ...props } = $props()
</script>
<button type="button" role="radio" aria-checked={pressed} {onclick} class={['inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-10 px-3', className].join(' ')} data-state={pressed ? 'on' : 'off'} {...props}><slot /></button>
