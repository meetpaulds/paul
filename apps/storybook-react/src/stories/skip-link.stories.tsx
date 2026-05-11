import type { Meta, StoryObj } from '@storybook/react-vite'
import { SkipLink } from '@meetpaul/ui-react'

const meta: Meta<typeof SkipLink> = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A visually hidden anchor that becomes visible on focus, allowing keyboard users to bypass repeated navigation. Satisfies WCAG 2.4.1 / EN 301 549 §9.2.4.1.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SkipLink>

export const Default: Story = {
  render: () => (
    <div>
      <SkipLink />
      <nav className="bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Tab into this story to see the skip link appear. Press Tab to focus it.
        </p>
      </nav>
      <main id="main-content" tabIndex={-1} className="p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="text-muted-foreground mt-2">The skip link jumps here.</p>
      </main>
    </div>
  ),
}

export const CustomTarget: Story = {
  render: () => (
    <div>
      <SkipLink targetId="content" />
      <nav className="bg-muted p-4">Navigation area</nav>
      <main id="content" tabIndex={-1} className="p-4">
        <h1 className="text-2xl font-bold">Custom Target</h1>
      </main>
    </div>
  ),
}

export const CustomLabel: Story = {
  args: {
    children: 'Skip navigation',
  },
}
