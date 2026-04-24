<script lang="ts">
  // @ts-nocheck
  /** Container for TabsTrigger buttons, styled as a segmented control. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
  const tabs = getContext<ReturnType<typeof import('@melt-ui/svelte').createTabs>>('paul-tabs')
</script>
<div use:melt={tabs.elements.list} class={cn('inline-flex h-11 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground', cls)}>
  {@render children?.()}
</div>
