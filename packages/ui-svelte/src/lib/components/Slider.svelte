<script lang="ts">
  /**
   * Slider — range value selector backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Slider bind:value={volume} min={0} max={100} step={1} />
   * ```
   *
   * @accessibility Arrow keys move by step, Home/End jump to min/max.
   */
  import { createSlider, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { value?: number[]; min?: number; max?: number; step?: number; disabled?: boolean; class?: string }
  let { value = $bindable([0]), min = 0, max = 100, step = 1, disabled = false, class: cls = '' }: Props = $props()

  const { elements: { root, range, thumb }, states } = createSlider({ defaultValue: [0], min: 0, max: 100, step: 1, disabled: false })
  $effect(() => { states.value.set(value) })

  $effect(() => {
    const unsub = states.value.subscribe(v => { value = v })
    return unsub
  })
</script>
<span use:melt={root} class={cn('relative flex w-full touch-none select-none items-center', cls)}>
  <span class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
    <span use:melt={range} class="absolute h-full bg-primary"></span>
  </span>
  {#each value as _, i}
    <span use:melt={thumb(i)} class="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"></span>
  {/each}
</span>
