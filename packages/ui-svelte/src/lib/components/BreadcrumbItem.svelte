<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<li class={['inline-flex items-center gap-1.5', className].join(' ')} {...props}><slot /></li>
