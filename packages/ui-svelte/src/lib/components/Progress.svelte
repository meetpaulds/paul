<script lang="ts">
  // @ts-nocheck
  /**
   * Progress — linear progress bar backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Progress value={75} />
   * ```
   *
   * @accessibility Sets role="progressbar" and aria-valuenow automatically.
   */
  import { createProgress, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { value?: number; max?: number; class?: string }
  const { value = 0, max = 100, class: cls = '' }: Props = $props()

  const { elements: { root }, options } = createProgress({ defaultValue: 0, max: 100 })
  $effect(() => { options.max.set(max) })
</script>
<div use:melt={root} class={cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', cls)}>
  <div class="h-full bg-primary transition-all" style="width: {(value / max) * 100}%"></div>
</div>
