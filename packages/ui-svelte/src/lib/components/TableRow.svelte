<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<tr class={['border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className].join(' ')} {...props}><slot /></tr>
