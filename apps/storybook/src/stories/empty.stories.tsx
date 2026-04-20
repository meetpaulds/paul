import type { Meta, StoryObj } from '@storybook/react-vite'
import { FolderOpen, Search, FileX } from 'lucide-react'
import { Empty } from '@meetpaul/ui'
import { Button } from '@meetpaul/ui'

const meta = {
  title: 'Data Display/Empty',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty
      icon={<FolderOpen className="h-10 w-10 text-muted-foreground" />}
      title="No items found"
      description="Get started by creating a new item."
    />
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty
      icon={<Search className="h-10 w-10 text-muted-foreground" />}
      title="No results"
      description="Try adjusting your search or filters."
      action={<Button>Create Item</Button>}
    />
  ),
}

export const Simple: Story = {
  render: () => (
    <Empty
      icon={<FileX className="h-10 w-10 text-muted-foreground" />}
      title="File not found"
      description="The file you are looking for does not exist."
    />
  ),
}

export const Dark: Story = {
  render: () => (
    <Empty
      icon={<FolderOpen className="h-10 w-10 text-muted-foreground" />}
      title="No items found"
      description="Get started by creating a new item."
      action={<Button>Create Item</Button>}
    />
  ),
  globals: { theme: 'dark' },
}
