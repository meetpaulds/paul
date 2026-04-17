import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@meetpaul/ui'
import { Button, Avatar, AvatarFallback, AvatarImage } from '@meetpaul/ui'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.hover(canvas.getByRole('button', { name: '@nextjs' }))
  },
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework for the Web. Used by some of the world's largest companies.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Open: Story = {
  render: () => (
    <HoverCard open>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework for the Web.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  play: async () => {
    await expect(within(document.body).getByText('The React Framework for the Web.')).toBeVisible()
  },
}

export const Dark: Story = {
  render: () => (
    <HoverCard open>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-60">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">The React Framework for the Web.</p>
      </HoverCardContent>
    </HoverCard>
  ),
  globals: { theme: 'dark' },
}
