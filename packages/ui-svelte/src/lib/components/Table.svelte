<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class="relative w-full overflow-auto">
  <table class={['w-full caption-bottom text-sm', className].join(' ')} {...props}>{@render children?.()}</table>
</div>
