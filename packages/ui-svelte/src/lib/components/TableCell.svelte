<script lang="ts">
  let { class: className = '', children, ...props} = $props()
</script>
<td class={['p-4 align-middle [&:has([role=checkbox])]:pe-0', className].join(' ')} {...props}>{@render children?.()}</td>
