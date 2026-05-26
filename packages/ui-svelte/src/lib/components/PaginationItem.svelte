<script lang="ts">
  let { class: className = '', children, ...props} = $props()
</script>
<li class={className} {...props}>{@render children?.()}</li>
