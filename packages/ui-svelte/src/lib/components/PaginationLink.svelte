<script lang="ts">
  let { href = '#', isActive = false, class: className = '', ...props } = $props()
</script>
<a {href} aria-current={isActive ? 'page' : undefined} class={['inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10', isActive ? 'border bg-background shadow-sm' : 'hover:bg-accent hover:text-accent-foreground', className].join(' ')} {...props}><slot /></a>
