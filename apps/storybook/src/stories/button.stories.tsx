import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@meetpaul/ui'

const meta = {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Button>Button</Button>,
}

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>,
}

export const Outline: Story = {
  render: () => <Button variant="outline">Outline</Button>,
}

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>,
}

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost</Button>,
}

export const Link: Story = {
  render: () => <Button variant="link">Link</Button>,
}

export const Small: Story = {
  render: () => <Button size="sm">Small</Button>,
}

export const Large: Story = {
  render: () => <Button size="lg">Large</Button>,
}

export const Disabled: Story = {
  render: () => <Button disabled>Disabled</Button>,
}
