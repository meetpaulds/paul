import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast } from 'sonner'
import { Toaster } from '@meetpaul/ui'
import { Button } from '@meetpaul/ui'

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="space-x-2">
        <Button onClick={() => toast('Event has been created')}>Show Toast</Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
            })
          }
        >
          Success
        </Button>
        <Button
          variant="destructive"
          onClick={() => toast.error('Failed to create event')}
        >
          Error
        </Button>
      </div>
    </>
  ),
}

export const Dark: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="space-x-2">
        <Button onClick={() => toast('Event has been created')}>Show Toast</Button>
        <Button variant="outline" onClick={() => toast.success('Success!')}>Success</Button>
      </div>
    </>
  ),
  globals: { theme: 'dark' },
}
