<script lang="ts">
  // @ts-nocheck
  /**
   * Label — accessible form label backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Label for="email">Email address</Label>
   * <Input id="email" type="email" bind:value={email} />
   * ```
   */
  import { createLabel, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { for?: string; class?: string; children?: import('svelte').Snippet }
  const { for: forId, class: cls = '', children }: Props = $props()

  const { elements: { root } } = createLabel()
</script>
<label use:melt={root} for={forId} class={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', cls)}>
  {@render children?.()}
</label>
