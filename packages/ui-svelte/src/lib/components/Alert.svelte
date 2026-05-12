<script lang="ts">
  /**
   * Alert — contextual feedback banner.
   *
   * @example
   * ```svelte
   * <Alert>
   *   <AlertTitle>Heads up</AlertTitle>
   *   <AlertDescription>You can add components.</AlertDescription>
   * </Alert>
   * <Alert variant="destructive">
   *   <AlertTitle>Error</AlertTitle>
   *   <AlertDescription>Session expired.</AlertDescription>
   * </Alert>
   * ```
   *
   * @accessibility Uses role="alert" so screen readers announce changes immediately.
   */
  import { cva } from 'class-variance-authority'
  import { cn } from '../utils'

  /**
   * CVA variant config for Alert.
   * @variant default     - Neutral background with default foreground text.
   * @variant destructive - Red border and text for error or danger states.
   */
  const alertVariants = cva(
    'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:start-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:ps-7 print:shadow-none print:border-black print:text-black',
    {
      variants: {
        variant: {
          default: 'bg-background text-foreground',
          destructive: 'border-destructive/50 text-destructive-text dark:border-destructive [&>svg]:text-destructive-text',
        },
      },
      defaultVariants: { variant: 'default' },
    }
  )

  interface Props {
    variant?: 'default' | 'destructive'
    class?: string
    children?: import('svelte').Snippet
  }
  const { variant = 'default', class: cls = '', children }: Props = $props()
</script>
<div role="alert" class={cn(alertVariants({ variant }), cls)}>
  {@render children?.()}
</div>
