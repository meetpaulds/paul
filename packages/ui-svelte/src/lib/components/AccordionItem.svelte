<script lang="ts">
  /** A single accordion section. Requires a unique `value` prop. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'

  interface Props {
    value: string
    class?: string
    children?: import('svelte').Snippet
  }
  const { value, class: cls = '', children }: Props = $props()
  const accordion = getContext<any>('paul-accordion')
</script>
<div use:melt={accordion.elements.item(value)} class={['border-b', cls].filter(Boolean).join(' ')}>
  {@render children?.()}
</div>
