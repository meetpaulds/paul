<script lang="ts">
  let { class: className = '', children, ...props} = $props()
</script>
<thead class={['[&_tr]:border-b', className].join(' ')} {...props}>{@render children?.()}</thead>
