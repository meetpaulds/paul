<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<nav aria-label="breadcrumb" class={className} {...props}><slot /></nav>
