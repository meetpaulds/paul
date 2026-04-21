<script lang="ts">
  /**
   * Tabs — tabbed interface backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Tabs defaultValue="account">
   *   <TabsList>
   *     <TabsTrigger value="account">Account</TabsTrigger>
   *     <TabsTrigger value="password">Password</TabsTrigger>
   *   </TabsList>
   *   <TabsContent value="account">Account settings here.</TabsContent>
   *   <TabsContent value="password">Password settings here.</TabsContent>
   * </Tabs>
   * ```
   *
   * @accessibility Arrow keys move between tabs. Panels linked via aria-controls/aria-labelledby.
   */
  import { createTabs, melt } from '@melt-ui/svelte'
  import { setContext } from 'svelte'
  import { cn } from '../utils'

  interface Props {
    defaultValue?: string
    value?: string
    class?: string
    children?: import('svelte').Snippet
  }
  let { defaultValue = '', value = $bindable(''), class: cls = '', children }: Props = $props()

  const tabs = createTabs({ defaultValue: '' })
  $effect(() => { if (value || defaultValue) tabs.options.value?.set(value || defaultValue) })
  setContext('paul-tabs', tabs)

  $effect(() => {
    const unsub = tabs.states.value.subscribe(v => { if (v) value = v })
    return unsub
  })
</script>
<div use:melt={tabs.elements.root} class={cls}>{@render children?.()}</div>
