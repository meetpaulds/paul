<script lang="ts">
  /**
   * FieldHelp — context-sensitive help for a form field.
   *
   * Renders an info icon with descriptive help text and an optional link to
   * more detailed documentation. Use inside a `Field` component below the input.
   *
   * @example
   * ```svelte
   * <Field label="Password" required>
   *   {#snippet input({ id })}
   *     <Input {id} type="password" bind:value={password} />
   *   {/snippet}
   *   <FieldHelp href="/docs/password-requirements" linkText="View requirements">
   *     Must be at least 8 characters with one uppercase letter and one number.
   *   </FieldHelp>
   * </Field>
   * ```
   *
   * @accessibility Satisfies WCAG 3.3.5 / EN 301 549 §9.3.3.5 — Help.
   */
  import { cn } from '../utils'

  interface Props {
    href?: string
    linkText?: string
    class?: string
    children?: import('svelte').Snippet
  }

  const { href, linkText = 'Learn more', class: cls = '', children }: Props = $props()
</script>

<div class={cn('flex items-start gap-2 text-sm text-muted-foreground', cls)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="mt-0.5 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
  <span>
    {@render children?.()}
    {#if href}
      {' '}
      <a
        {href}
        class="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        target="_blank"
        rel="noopener noreferrer"
      >{linkText}</a>
    {/if}
  </span>
</div>
