<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<ul class={['group flex flex-1 list-none items-center justify-center space-x-1', className].join(' ')} {...props}><slot /></ul>
