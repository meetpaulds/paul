<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<nav class={['relative z-10 flex max-w-max flex-1 items-center justify-center', className].join(' ')} {...props}><slot /></nav>
