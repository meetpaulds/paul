<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['px-2 py-1.5 text-sm font-semibold', className].join(' ')} {...props}><slot /></div>
