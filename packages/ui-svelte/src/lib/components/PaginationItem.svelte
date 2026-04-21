<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<li class={className} {...props}><slot /></li>
