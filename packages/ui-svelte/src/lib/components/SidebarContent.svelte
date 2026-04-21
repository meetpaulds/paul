<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['flex min-h-0 flex-1 flex-col gap-2 overflow-auto', className].join(' ')} {...props}><slot /></div>
