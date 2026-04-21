<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<tbody class={['[&_tr:last-child]:border-0', className].join(' ')} {...props}><slot /></tbody>
