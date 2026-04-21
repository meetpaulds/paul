<script lang="ts">
  /**
   * Select — dropdown selection backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Select bind:value={fruit} placeholder="Pick a fruit">
   *   <SelectItem value="apple">Apple</SelectItem>
   *   <SelectItem value="banana">Banana</SelectItem>
   * </Select>
   * ```
   *
   * @accessibility Keyboard-navigable with Arrow keys. Search by typing.
   */
  import { createSelect, melt } from '@melt-ui/svelte'
  import { setContext } from 'svelte'
  import { cn } from '../utils'

  interface Props {
    value?: string
    placeholder?: string
    disabled?: boolean
    class?: string
    children?: import('svelte').Snippet
  }
  let { value = $bindable(''), placeholder = 'Select...', disabled = false, class: cls = '', children }: Props = $props()

  const select = createSelect({ disabled: false })
  setContext('paul-select', select)

  $effect(() => {
    const unsub = select.states.selected.subscribe(v => { if (v) value = v.value })
    return unsub
  })
</script>
<div class={cn('relative', cls)}>
  <button
    use:melt={select.elements.trigger}
    class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
  >
    <span use:melt={select.elements.value}>{$state.snapshot(select.states.selected)?.label ?? placeholder}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-50" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div use:melt={select.elements.menu} class="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
    {@render children?.()}
  </div>
</div>
