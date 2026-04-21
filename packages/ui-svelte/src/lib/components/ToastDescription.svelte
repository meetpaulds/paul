<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['text-sm opacity-90', className].join(' ')} {...props}><slot /></div>
