<script lang="ts">
  /**
   * Input — single-line text input with consistent focus styling.
   *
   * @example
   * ```svelte
   * <Input type="email" placeholder="you@example.com" bind:value={email} />
   * ```
   *
   * @accessibility Always associate with a label (or use inside Field).
   */
  import { cn } from '../utils'
  interface Props {
    type?: string
    placeholder?: string
    value?: string
    disabled?: boolean
    id?: string
    class?: string
    [key: string]: unknown
  }
  let { type = 'text', placeholder = '', value = $bindable(''), disabled = false, id, class: cls = '', ...rest }: Props = $props()
</script>
<input
  {type}
  {placeholder}
  {disabled}
  {id}
  bind:value
  class={cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', cls)}
  {...rest}
/>
