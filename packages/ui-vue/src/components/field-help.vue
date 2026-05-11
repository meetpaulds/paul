<script setup lang="ts">
import { cn } from '@/lib/utils'

/**
 * FieldHelp — context-sensitive help for a form field.
 *
 * Renders an info icon with descriptive help text and an optional link to
 * more detailed documentation. Use inside a `Field` component below the input.
 *
 * @example
 * ```vue
 * <Field label="Password" required>
 *   <template #default="{ id }">
 *     <Input :id="id" type="password" v-model="password" />
 *   </template>
 *   <FieldHelp href="/docs/password-requirements" link-text="View requirements">
 *     Must be at least 8 characters with one uppercase letter and one number.
 *   </FieldHelp>
 * </Field>
 * ```
 *
 * @accessibility Satisfies WCAG 3.3.5 / EN 301 549 §9.3.3.5 — Help.
 */
defineOptions({ name: 'FieldHelp' })

const props = withDefaults(defineProps<{
  /** URL to link to for more detailed help. */
  href?: string
  /** Link text when href is provided. @default 'Learn more' */
  linkText?: string
  class?: string
}>(), {
  linkText: 'Learn more',
})
</script>

<template>
  <div :class="cn('flex items-start gap-2 text-sm text-muted-foreground', props.class)">
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
      <slot />
      <template v-if="props.href">
        {{ ' ' }}
        <a
          :href="props.href"
          class="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          target="_blank"
          rel="noopener noreferrer"
        >{{ props.linkText }}</a>
      </template>
    </span>
  </div>
</template>
