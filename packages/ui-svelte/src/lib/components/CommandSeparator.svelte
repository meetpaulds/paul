<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class={['-mx-1 h-px bg-border', className].join(' ')} {...props}></div>
