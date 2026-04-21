<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['text-sm font-semibold', className].join(' ')} {...props}><slot /></div>
