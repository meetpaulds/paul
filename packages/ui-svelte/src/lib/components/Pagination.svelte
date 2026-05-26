<script lang="ts">
  let { class: className = '', children, ...props} = $props()
</script>
<nav aria-label="pagination" class={['mx-auto flex w-full justify-center', className].join(' ')} {...props}>{@render children?.()}</nav>
