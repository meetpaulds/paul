<script lang="ts">
  /**
   * Button — the primary interactive element for triggering actions.
   *
   * @example
   * ```svelte
   * <Button>Save</Button>
   * <Button variant="destructive" size="sm">Delete</Button>
   * <Button variant="outline" href="/dashboard">Go to Dashboard</Button>
   * ```
   *
   * @accessibility Always provide a descriptive label. For icon-only buttons, add aria-label.
   */
  import { cva } from 'class-variance-authority'
  import { cn } from '../utils'

  /**
   * CVA variant config for Button.
   * @variant default           - Primary brand colour; the main call-to-action.
   * @variant destructive        - Solid red; for irreversible or dangerous actions.
   * @variant destructive-outline - Red border on transparent background.
   * @variant destructive-ghost  - Red text only, no background.
   * @variant outline            - Border with transparent background; secondary actions.
   * @variant secondary          - Neutral muted background; tertiary actions.
   * @variant ghost              - No background or border; icon buttons and toolbars.
   * @variant link               - Looks like a hyperlink with underline on hover.
   */
  const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
          'destructive-outline': 'border border-destructive/50 text-destructive-text bg-background shadow-sm hover:bg-destructive/10',
          'destructive-ghost': 'text-destructive-text hover:bg-destructive/10',
          outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2',
          sm: 'h-8 rounded-md px-3 text-xs',
          lg: 'h-10 rounded-md px-8',
          icon: 'h-9 w-9',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  )

  interface Props {
    variant?: 'default' | 'destructive' | 'destructive-outline' | 'destructive-ghost' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    href?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    class?: string
    children?: import('svelte').Snippet
    [key: string]: unknown
  }
  const { variant = 'default', size = 'default', href, type = 'button', disabled = false, class: cls = '', children, ...rest }: Props = $props()
  const cls_ = $derived(cn(buttonVariants({ variant, size }), cls))
</script>
{#if href}
  <a {href} class={cls_} {...rest}>{@render children?.()}</a>
{:else}
  <button {type} {disabled} class={cls_} {...rest}>{@render children?.()}</button>
{/if}
