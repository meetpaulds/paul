<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<span role="link" aria-disabled="true" aria-current="page" class={['font-normal text-foreground', className].join(' ')} {...props}><slot /></span>
