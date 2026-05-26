<script lang="ts">
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['text-sm opacity-90', className].join(' ')} {...props}>{@render children?.()}</div>
