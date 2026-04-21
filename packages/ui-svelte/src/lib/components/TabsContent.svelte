<script lang="ts">
  // @ts-nocheck
  /** Content panel shown when its matching tab is active. Requires a value prop. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'
  interface Props { value: string; class?: string; children?: import('svelte').Snippet }
  const { value, class: cls = '', children }: Props = $props()
  const tabs = getContext<ReturnType<typeof import('@melt-ui/svelte').createTabs>>('paul-tabs')
</script>
<div use:melt={tabs.elements.content(value)} class={cn('mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring', cls)}>
  {@render children?.()}
</div>
