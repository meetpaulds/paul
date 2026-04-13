import type { Meta, StoryObj } from '@storybook/react'
import { FolderOpen, Search, FileX } from 'lucide-react'
import { Empty } from './empty'
import { Button } from './button'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <FolderOpen className="h-10 w-10 text-muted-foreground" />,
    title: 'No items found',
    description: 'Get started by creating a new item.',
  },
}

export const WithAction: Story = {
  args: {
    icon: <Search className="h-10 w-10 text-muted-foreground" />,
    title: 'No results',
    description: 'Try adjusting your search or filters.',
    action: <Button>Create Item</Button>,
  },
}

export const Simple: Story = {
  args: {
    icon: <FileX className="h-10 w-10 text-muted-foreground" />,
    title: 'File not found',
    description: 'The file you are looking for does not exist.',
  },
}
