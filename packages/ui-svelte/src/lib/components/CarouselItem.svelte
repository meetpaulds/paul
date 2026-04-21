<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['min-w-0 shrink-0 grow-0 basis-full pl-4', className].join(' ')} {...props}><slot /></div>
