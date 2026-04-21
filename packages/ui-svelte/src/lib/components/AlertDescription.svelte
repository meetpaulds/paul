<script lang="ts">
  /** Supporting description text inside an Alert. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('text-sm [&_p]:leading-relaxed', cls)}>{@render children?.()}</div>
