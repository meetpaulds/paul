import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { Input } from '@meetpaul/ui'
import { Label } from '@meetpaul/ui'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'Hello World')
    await expect(input).toHaveValue('Hello World')
  },
}

export const WithLabel: Story = {
  render: (args: React.ComponentProps<typeof Input>) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="Email" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Disabled value',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
}

export const Dark: Story = {
  render: (_args: React.ComponentProps<typeof Input>) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="dark-input">Email</Label>
      <Input id="dark-input" type="email" placeholder="Enter email..." />
    </div>
  ),
  globals: { theme: 'dark' },
}
