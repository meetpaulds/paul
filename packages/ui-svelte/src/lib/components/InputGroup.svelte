<script lang="ts">
  /**
   * InputGroup — combines an input with prefix/suffix addons.
   *
   * @example
   * ```svelte
   * <InputGroup>
   *   <InputGroupText>https://</InputGroupText>
   *   <Input placeholder="example.com" />
   * </InputGroup>
   * ```
   */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('flex [&>input]:rounded-none [&>input:first-child]:rounded-s-md [&>input:last-child]:rounded-e-md', cls)}>
  {@render children?.()}
</div>
