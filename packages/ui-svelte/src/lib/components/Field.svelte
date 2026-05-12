<script lang="ts">
  /**
   * Field — form field wrapper wiring a label, hint, and error to its input.
   *
   * @example
   * ```svelte
   * <Field label="Email" hint="We'll never share it." error={errors.email} required>
   *   {#snippet input({ id })}
   *     <Input {id} type="email" bind:value={email} />
   *   {/snippet}
   * </Field>
   * ```
   *
   * @accessibility Label is programmatically linked to the input via matching for/id.
   */
  import { cn } from '../utils'
  const uid = Math.random().toString(36).slice(2, 9)
  interface Props {
    label?: string
    hint?: string
    error?: string
    required?: boolean
    id?: string
    class?: string
    input?: import('svelte').Snippet<[{ id: string }]>
    children?: import('svelte').Snippet
  }
  const { label = '', hint = '', error = '', required = false, id = `field-${uid}`, class: cls = '', input, children }: Props = $props()
</script>
<div class={cn('flex flex-col gap-1.5', cls)}>
  {#if label}
    <label for={id} class="text-sm font-medium leading-none">
      {label}{#if required}<span class="text-destructive-text ms-0.5" aria-hidden="true">*</span>{/if}
    </label>
  {/if}
  {#if input}
    {@render input({ id })}
  {:else}
    {@render children?.()}
  {/if}
  {#if hint && !error}<p class="text-sm text-muted-foreground">{hint}</p>{/if}
  {#if error}<p class="text-sm text-destructive-text" role="alert">{error}</p>{/if}
</div>
