import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The id of the main content element to skip to. @default 'main-content' */
  targetId?: string
}

/**
 * SkipLink — a visually hidden anchor that becomes visible on focus, allowing
 * keyboard and screen reader users to bypass repeated navigation blocks.
 *
 * Place this as the very first element inside <body>. The target element must
 * have a matching `id` and be focusable (add `tabIndex={-1}` if needed).
 *
 * @example
 * ```tsx
 * // In your layout:
 * <SkipLink />
 * <nav>...</nav>
 * <main id="main-content" tabIndex={-1}>...</main>
 * ```
 *
 * @accessibility Satisfies WCAG 2.4.1 / EN 301 549 §9.2.4.1 — Bypass Blocks.
 */
const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ className, targetId = 'main-content', children = 'Skip to main content', ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          'sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999]',
          'focus:inline-flex focus:items-center focus:rounded-md focus:bg-background',
          'focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground',
          'focus:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2',
          'focus:outline-none',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
SkipLink.displayName = 'SkipLink'

export { SkipLink }
