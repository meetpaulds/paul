<script lang="ts">
  /**
   * Switch — toggle switch backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Switch bind:checked={isDarkMode} id="dark-mode" />
   * <Label for="dark-mode">Dark Mode</Label>
   * ```
   *
   * @accessibility Reports role="switch" and aria-checked automatically.
   */
  import { createSwitch, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { checked?: boolean; disabled?: boolean; id?: string; class?: string; label?: string }
  let { checked = $bindable(false), disabled = false, id, class: cls = '', label }: Props = $props()

  const { elements: { root, input }, states } = createSwitch({ defaultChecked: false, disabled: false })

  $effect(() => {
    const unsub = states.checked.subscribe(v => { checked = v })
    return unsub
  })
</script>
<button
  use:melt={root}
  {id}
  aria-label={label ?? id ?? 'toggle'}
  class={cn(
    'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
    checked ? 'bg-primary' : 'bg-input',
    cls
  )}
>
  <span class={cn('pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform', checked ? 'translate-x-4' : 'translate-x-0')}></span>
</button>
<input use:melt={input} class="sr-only" />
