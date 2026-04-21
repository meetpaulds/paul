<script lang="ts">
  /** Image inside an Avatar. Shows the fallback if the image fails to load. */
  import { cn } from '../utils'
  interface Props { src: string; alt: string; class?: string }
  const { src, alt, class: cls = '' }: Props = $props()
  let error = $state(false)
</script>
{#if !error}
  <img {src} {alt} class={cn('aspect-square h-full w-full', cls)} onerror={() => (error = true)} />
{/if}
