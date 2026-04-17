import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd } from '@meetpaul/ui'

const meta = {
  title: 'Components/Kbd',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Kbd>⌘K</Kbd>,
}

export const Keys: Story = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>↵</Kbd>
    </div>
  ),
}

export const Shortcuts: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette
    </div>
  ),
}

export const Dark: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette
    </div>
  ),
  globals: { theme: 'dark' },
}
