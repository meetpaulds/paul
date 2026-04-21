<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<th class={['h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', className].join(' ')} {...props}><slot /></th>
