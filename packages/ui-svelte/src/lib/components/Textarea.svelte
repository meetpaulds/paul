<script lang="ts">
  /**
   * Textarea — multi-line text input.
   *
   * @example
   * ```svelte
   * <Textarea placeholder="Tell us about yourself." bind:value={bio} />
   * ```
   *
   * @accessibility Always associate with a label or use inside Field.
   */
  import { cn } from '../utils'
  interface Props { placeholder?: string; value?: string; disabled?: boolean; id?: string; class?: string; rows?: number; [key: string]: unknown }
  let { placeholder = '', value = $bindable(''), disabled = false, id, class: cls = '', rows, ...rest }: Props = $props()
</script>
<textarea
  {placeholder}
  {disabled}
  {id}
  {rows}
  bind:value
  class={cn('flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', cls)}
  {...rest}
></textarea>
