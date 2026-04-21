<script lang="ts">
  // @ts-nocheck
  /**
   * RadioGroup — single-selection control backed by Melt UI.
   *
   * @example
   * ```svelte
   * <RadioGroup bind:value={plan}>
   *   <div class="flex items-center gap-2">
   *     <RadioGroupItem value="starter" id="starter" />
   *     <Label for="starter">Starter</Label>
   *   </div>
   * </RadioGroup>
   * ```
   *
   * @accessibility Arrow keys cycle through items. Each item requires an associated Label.
   */
  import { createRadioGroup, melt } from '@melt-ui/svelte'
  import { setContext } from 'svelte'
  import { cn } from '../utils'

  interface Props {
    value?: string
    class?: string
    children?: import('svelte').Snippet
  }
  let { value = $bindable(''), class: cls = '', children }: Props = $props()

  const radioGroup = createRadioGroup({ defaultValue: value })
  setContext('paul-radio-group', radioGroup)

  $effect(() => {
    const unsub = radioGroup.states.value.subscribe(v => { if (v !== undefined) value = v })
    return unsub
  })
</script>
<div use:melt={radioGroup.elements.root} class={cn('grid gap-2', cls)}>{@render children?.()}</div>
