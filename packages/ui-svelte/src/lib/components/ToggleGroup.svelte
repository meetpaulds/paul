<script lang="ts">
  import type { Snippet } from 'svelte'
  let { value = $bindable<string | string[]>(''), type = 'single', class: className = '', children, ...props }: { value?: string | string[]; type?: string; class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<div class={['flex items-center justify-center gap-1', className].join(' ')} role="group" {...props}>{#if children}{@render children()}{/if}</div>
