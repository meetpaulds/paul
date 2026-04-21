<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<li class={['group/menu-item relative', className].join(' ')} {...props}>{@render children?.()}</li>
