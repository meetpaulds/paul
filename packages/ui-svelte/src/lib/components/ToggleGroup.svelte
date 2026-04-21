<script lang="ts">
  let { value = $bindable<string | string[]>(''), type = 'single', class: className = '', ...props } = $props()
</script>
<div class={['flex items-center justify-center gap-1', className].join(' ')} role="group" {...props}><slot /></div>
