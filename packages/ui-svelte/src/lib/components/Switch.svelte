<script lang="ts">
  // @ts-nocheck
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
   * Track is 24×44px (WCAG 2.5.8 AA). For strict AAA (44×44px),
   * wrap with padding or use a larger container that extends the clickable region.
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
    'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
    checked ? 'bg-primary' : 'bg-input',
    cls
  )}
>
  <span class={cn('pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform', checked ? 'translate-x-6' : 'translate-x-0')}></span>
</button>
<input use:melt={input} class="sr-only" />
