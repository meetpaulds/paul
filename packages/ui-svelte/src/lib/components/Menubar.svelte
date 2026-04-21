<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className].join(' ')} {...props}><slot /></div>
