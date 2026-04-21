<script lang="ts">
  /**
   * Toggle — a two-state button backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Toggle bind:pressed={isBold} aria-label="Bold">B</Toggle>
   * ```
   *
   * @accessibility Reports aria-pressed state. Always provide aria-label for icon-only toggles.
   */
  import { createToggle, melt } from '@melt-ui/svelte'
  import { cva } from 'class-variance-authority'
  import { cn } from '../utils'

  /**
   * CVA variant config for Toggle.
   * @variant default - Transparent background; standard toggle.
   * @variant outline - Border with transparent background; shows accent on hover.
   */
  const toggleVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    {
      variants: {
        variant: { default: 'bg-transparent', outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground' },
        size: { default: 'h-9 px-3', sm: 'h-8 px-2', lg: 'h-10 px-3' },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  )

  interface Props {
    pressed?: boolean
    variant?: 'default' | 'outline'
    size?: 'default' | 'sm' | 'lg'
    disabled?: boolean
    class?: string
    children?: import('svelte').Snippet
    [key: string]: unknown
  }
  let { pressed = $bindable(false), variant = 'default', size = 'default', disabled = false, class: cls = '', children, ...rest }: Props = $props()

  const { elements: { root }, states } = createToggle({ defaultPressed: false, disabled: false })

  $effect(() => {
    const unsub = states.pressed.subscribe(v => { pressed = v })
    return unsub
  })
</script>
<button use:melt={root} class={cn(toggleVariants({ variant, size }), cls)} {...rest}>
  {@render children?.()}
</button>
