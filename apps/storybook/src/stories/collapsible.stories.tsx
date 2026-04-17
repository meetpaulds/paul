import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@meetpaul/ui'
import { Button } from '@meetpaul/ui'
import { ChevronDown } from 'lucide-react'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', { name: /toggle/i })
    await userEvent.click(toggle)
    await expect(canvas.getByText('@radix-ui/colors')).toBeVisible()
    await userEvent.click(toggle)
    await expect(canvas.queryByText('@radix-ui/colors')).not.toBeInTheDocument()
  },
}

export const Dark: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Starred repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
  globals: { theme: 'dark' },
}
