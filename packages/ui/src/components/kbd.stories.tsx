import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './kbd'

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '⌘K',
  },
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
