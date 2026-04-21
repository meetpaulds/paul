<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['-mx-1 my-1 h-px bg-muted', className].join(' ')} {...props}></div>
