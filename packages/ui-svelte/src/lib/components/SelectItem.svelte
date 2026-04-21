<script lang="ts">
  // @ts-nocheck
  /** A single selectable option inside Select. Shows a checkmark when selected. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { value: string; disabled?: boolean; class?: string; children?: import('svelte').Snippet }
  const { value, disabled = false, class: cls = '', children }: Props = $props()
  const select = getContext<ReturnType<typeof import('@melt-ui/svelte').createSelect>>('paul-select')
</script>
<div
  use:melt={select.elements.option({ value, label: typeof children === 'function' ? value : value, disabled })}
  class={cn('relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', cls)}
>
  {@render children?.()}
</div>
