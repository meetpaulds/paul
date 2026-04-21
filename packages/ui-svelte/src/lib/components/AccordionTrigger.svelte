<script lang="ts">
  // @ts-nocheck
  /** Clickable header that toggles the accordion section. Animates a chevron icon. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props {
    value: string
    class?: string
    children?: import('svelte').Snippet
  }
  const { value, class: cls = '', children }: Props = $props()
  const accordion = getContext<ReturnType<typeof import('@melt-ui/svelte').createAccordion>>('paul-accordion')
</script>
<button
  use:melt={accordion.elements.trigger(value)}
  class={cn('flex flex-1 w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', cls)}
>
  {@render children?.()}
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
</button>
