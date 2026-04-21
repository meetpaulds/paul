<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<caption class={['mt-4 text-sm text-muted-foreground', className].join(' ')} {...props}><slot /></caption>
