<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<thead class={['[&_tr]:border-b', className].join(' ')} {...props}><slot /></thead>
