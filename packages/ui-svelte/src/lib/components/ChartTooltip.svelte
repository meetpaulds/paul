<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['rounded-lg border bg-background px-3 py-2 shadow-md text-xs', className].join(' ')} {...props}><slot /></div>
