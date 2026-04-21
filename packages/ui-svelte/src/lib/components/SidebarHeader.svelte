<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['flex flex-col gap-2 p-2', className].join(' ')} {...props}><slot /></div>
