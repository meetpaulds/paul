<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<td class={['p-4 align-middle [&:has([role=checkbox])]:pr-0', className].join(' ')} {...props}><slot /></td>
