<script lang="ts">
  /**
   * Spinner — animated loading indicator.
   *
   * @example
   * ```svelte
   * <Spinner />
   * <Spinner size="lg" />
   * ```
   */
  import { cva } from 'class-variance-authority'
  import { cn } from '../utils'

  /**
   * CVA variant config for Spinner.
   * @variant sm      - 16×16px; inline or compact contexts.
   * @variant default - 24×24px; standard loading indicator.
   * @variant lg      - 32×32px; section-level loading states.
   * @variant xl      - 48×48px; full-page loading overlays.
   */
  const spinnerVariants = cva('animate-spin text-muted-foreground', {
    variants: { size: { sm: 'h-4 w-4', default: 'h-6 w-6', lg: 'h-8 w-8', xl: 'h-12 w-12' } },
    defaultVariants: { size: 'default' },
  })

  interface Props { size?: 'sm' | 'default' | 'lg' | 'xl'; class?: string }
  const { size = 'default', class: cls = '' }: Props = $props()
</script>
<span class="flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={cn(spinnerVariants({ size }), cls)} aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
</span>
