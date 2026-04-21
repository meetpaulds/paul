<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<nav role="navigation" aria-label="pagination" class={['mx-auto flex w-full justify-center', className].join(' ')} {...props}><slot /></nav>
