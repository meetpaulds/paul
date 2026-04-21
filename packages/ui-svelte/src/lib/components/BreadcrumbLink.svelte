<script lang="ts">
  let { href = '#', class: className = '', ...props } = $props()
</script>
<a {href} class={['transition-colors hover:text-foreground', className].join(' ')} {...props}><slot /></a>
