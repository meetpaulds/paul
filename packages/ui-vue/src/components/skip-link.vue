<script setup lang="ts">
import { cn } from '@/lib/utils'

/**
 * SkipLink — a visually hidden anchor that becomes visible on focus, allowing
 * keyboard and screen reader users to bypass repeated navigation blocks.
 *
 * Place this as the very first element inside your layout. The target element
 * must have a matching `id` and be focusable (add `tabindex="-1"` if needed).
 *
 * @example
 * ```vue
 * <SkipLink />
 * <nav>...</nav>
 * <main id="main-content" tabindex="-1">...</main>
 * ```
 *
 * @accessibility Satisfies WCAG 2.4.1 / EN 301 549 §9.2.4.1 — Bypass Blocks.
 */
defineOptions({ name: 'SkipLink' })

const props = withDefaults(defineProps<{
  /** The id of the main content element to skip to. @default 'main-content' */
  targetId?: string
  class?: string
}>(), {
  targetId: 'main-content',
})
</script>

<template>
  <a
    :href="`#${props.targetId}`"
    :class="cn(
      'sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999]',
      'focus:inline-flex focus:items-center focus:rounded-md focus:bg-background',
      'focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground',
      'focus:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'focus:outline-none',
      props.class
    )"
  >
    <slot>Skip to main content</slot>
  </a>
</template>
