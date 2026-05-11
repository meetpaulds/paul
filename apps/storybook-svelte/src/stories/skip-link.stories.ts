import type { Meta, StoryObj } from '@storybook/svelte-vite'
import SkipLink from '@meetpaul/ui-svelte/SkipLink.svelte'

const meta: Meta<typeof SkipLink> = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A visually hidden anchor that becomes visible on focus, allowing keyboard users to bypass repeated navigation. Satisfies WCAG 2.4.1 / EN 301 549 §9.2.4.1.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SkipLink>

export const Default: Story = {
  args: { targetId: 'main-content' },
}

export const CustomTarget: Story = {
  args: { targetId: 'content' },
}
