<script lang="ts">
  /**
   * Badge — a small inline label to highlight status, category, or metadata.
   *
   * @example
   * ```svelte
   * <Badge>New</Badge>
   * <Badge variant="destructive">Error</Badge>
   * <Badge variant="outline">Draft</Badge>
   * ```
   */
  import { cva } from 'class-variance-authority'
  import { cn } from '../utils'

  /**
   * CVA variant config for Badge.
   * @variant default     - Primary brand colour with high-contrast white text.
   * @variant secondary   - Subtle neutral background for low-emphasis labels.
   * @variant destructive - Red background for error states.
   * @variant outline     - Transparent background with a border.
   */
  const badgeVariants = cva(
    'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 print:shadow-none print:border-black print:text-black',
    {
      variants: {
        variant: {
          default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
          secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
          destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
          outline: 'text-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    }
  )

  interface Props {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
    class?: string
    children?: import('svelte').Snippet
  }
  const { variant = 'default', class: cls = '', children }: Props = $props()
</script>
<div class={cn(badgeVariants({ variant }), cls)}>{@render children?.()}</div>
