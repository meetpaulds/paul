import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { AspectRatio } from '@meetpaul/ui'

const meta = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    className: 'bg-muted w-[400px]',
  },
  render: (args: React.ComponentProps<typeof AspectRatio>) => (
    <AspectRatio {...args}>
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="rounded-md object-cover h-full w-full"
      />
    </AspectRatio>
  ),
}

export const Square: Story = {
  args: {
    ratio: 1,
    className: 'bg-muted w-[200px]',
  },
  render: (args: React.ComponentProps<typeof AspectRatio>) => (
    <AspectRatio {...args}>
      <div className="flex h-full w-full items-center justify-center bg-muted rounded-md">
        <span className="text-muted-foreground">1:1</span>
      </div>
    </AspectRatio>
  ),
}

export const Dark: Story = {
  args: {
    ratio: 16 / 9,
    className: 'bg-muted w-[400px]',
  },
  render: (args: React.ComponentProps<typeof AspectRatio>) => (
    <AspectRatio {...args}>
      <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground text-sm">
        16:9
      </div>
    </AspectRatio>
  ),
  globals: { theme: 'dark' },
}

export const Portrait: Story = {
  args: {
    ratio: 2 / 3,
    className: 'bg-muted w-[200px]',
  },
  render: (args: React.ComponentProps<typeof AspectRatio>) => (
    <AspectRatio {...args}>
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo"
        className="rounded-md object-cover h-full w-full"
      />
    </AspectRatio>
  ),
}
