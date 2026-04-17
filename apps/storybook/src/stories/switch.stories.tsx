import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Switch } from '@meetpaul/ui'
import { Label } from '@meetpaul/ui'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole('switch')
    await expect(switchEl).not.toBeChecked()
    await userEvent.click(switchEl)
    await expect(switchEl).toBeChecked()
  },
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked" defaultChecked />
      <Label htmlFor="checked">Enabled by default</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled
      </Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('switch')).toBeDisabled()
  },
}

export const Dark: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="dark-switch" defaultChecked />
      <Label htmlFor="dark-switch">Dark Mode Switch</Label>
    </div>
  ),
  globals: { theme: 'dark' },
}
