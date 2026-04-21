<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<ul class={['flex w-full min-w-0 flex-col gap-1', className].join(' ')} {...props}><slot /></ul>
