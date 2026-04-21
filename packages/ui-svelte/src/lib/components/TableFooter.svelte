<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<tfoot class={['border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className].join(' ')} {...props}><slot /></tfoot>
