<script lang="ts">
  /** Primary heading inside an Alert. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<h5 class={cn('mb-1 font-medium leading-none tracking-tight', cls)}>{@render children?.()}</h5>
