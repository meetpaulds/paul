<script lang="ts">
  /** Individual radio button inside a RadioGroup. Requires a unique value prop. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { value: string; disabled?: boolean; id?: string; class?: string; label?: string }
  const { value, disabled = false, id, class: cls = '', label }: Props = $props()
  const radioGroup = getContext<ReturnType<typeof import('@melt-ui/svelte').createRadioGroup>>('paul-radio-group')
</script>
<button
  use:melt={radioGroup.elements.item(value)}
  {id}
  {disabled}
  aria-label={label ?? value}
  class={cn('aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', cls)}
>
  <div use:melt={radioGroup.elements.itemIndicator(value)} class="flex h-full w-full items-center justify-center">
    <div class="h-2.5 w-2.5 rounded-full bg-primary"></div>
  </div>
</button>
