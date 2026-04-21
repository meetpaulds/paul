<script lang="ts">
  // Checkbox -- accessible checkbox backed by Melt UI.
  //
  // @example
  //   let checked = $state(false)
  //   <Checkbox bind:checked id="terms" />
  //   <label for="terms">Accept terms</label>
  //
  // @accessibility Supports indeterminate state. Keyboard-navigable with Space.
  import { createCheckbox, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props {
    checked?: boolean | 'indeterminate'
    disabled?: boolean
    id?: string
    class?: string
    onCheckedChange?: (v: boolean | 'indeterminate') => void
  }
  let { checked = $bindable(false), disabled = false, id, class: cls = '', onCheckedChange }: Props = $props()

  const { elements: { root }, states } = createCheckbox({ defaultChecked: false, disabled: false })

  $effect(() => {
    const unsub = states.checked.subscribe(v => {
      checked = v
      onCheckedChange?.(v)
    })
    return unsub
  })
</script>
<button
  use:melt={root}
  {id}
  aria-label={id ?? 'checkbox'}
  class={cn(
    'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    cls
  )}
>
  {#if checked === true}
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="flex items-center justify-center">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  {/if}
</button>
