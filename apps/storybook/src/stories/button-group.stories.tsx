import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@meetpaul/ui'
import { ButtonGroup } from '@meetpaul/ui'

const meta = {
  title: 'Components/ButtonGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="outline">Three</Button>
    </ButtonGroup>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </ButtonGroup>
  ),
}
