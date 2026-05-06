<script lang="ts">
  // @ts-nocheck
  /** Tab button that activates its associated TabsContent panel. Requires a value prop. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'
  interface Props { value: string; disabled?: boolean; class?: string; children?: import('svelte').Snippet }
  const { value, disabled = false, class: cls = '', children }: Props = $props()
  const tabs = getContext<ReturnType<typeof import('@melt-ui/svelte').createTabs>>('paul-tabs')
</script>
<button
  use:melt={tabs.elements.trigger(value)}
  {disabled}
  class={cn('inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow', cls)}
>
  {@render children?.()}
</button>
