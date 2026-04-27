<script lang="ts">
  // @ts-nocheck
  // Dialog — modal window backed by Melt UI with focus trapping and portal rendering.
  //
  // @example
  //   let open = $state(false)
  //   <Button onclick={() => open = true}>Open</Button>
  //   <Dialog bind:open>
  //     <DialogTitle>Edit Profile</DialogTitle>
  //   </Dialog>
  //
  // @accessibility Focus trapped inside dialog. Escape closes. role="dialog" + aria-modal set automatically.
  import { createDialog, melt } from '@melt-ui/svelte'
  import { setContext } from 'svelte'
  import { cn } from '../utils'

  interface Props {
    open?: boolean
    class?: string
    children?: import('svelte').Snippet
  }
  let { open = $bindable(false), class: cls = '', children }: Props = $props()

  const dialog = createDialog({ defaultOpen: open })
  setContext('paul-dialog', dialog)

  $effect(() => {
    const unsub = dialog.states.open.subscribe(v => { open = v })
    return unsub
  })
  $effect(() => { dialog.states.open.set(open) })
</script>
{#if open}
  <div use:melt={dialog.elements.portalled}>
    <div use:melt={dialog.elements.overlay} class="fixed inset-0 z-50 bg-black/80 animate-in fade-in-0"></div>
    <div
      use:melt={dialog.elements.content}
      class={cn('fixed start-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg sm:rounded-lg animate-in fade-in-0 zoom-in-95 print:shadow-none print:rounded-none print:border-black print:text-black', cls)}
    >
      {@render children?.()}
      <button use:melt={dialog.elements.close} class="absolute end-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        <span class="sr-only">Close</span>
      </button>
    </div>
  </div>
{/if}
