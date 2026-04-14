import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputGroup, InputGroupText } from '@meetpaul/ui'
import { Input } from '@meetpaul/ui'
import { DollarSign, AtSign, Lock } from 'lucide-react'

const meta = {
  title: 'Components/InputGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const WithTextPrefix: Story = {
  render: () => (
    <InputGroup>
      <InputGroupText>https://</InputGroupText>
      <Input placeholder="example.com" />
    </InputGroup>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupText>
        <DollarSign className="h-4 w-4" />
      </InputGroupText>
      <Input type="number" placeholder="0.00" />
    </InputGroup>
  ),
}

export const WithAtSign: Story = {
  render: () => (
    <InputGroup>
      <InputGroupText>
        <AtSign className="h-4 w-4" />
      </InputGroupText>
      <Input placeholder="username" />
      <InputGroupText>@example.com</InputGroupText>
    </InputGroup>
  ),
}

export const WithPassword: Story = {
  render: () => (
    <InputGroup>
      <InputGroupText>
        <Lock className="h-4 w-4" />
      </InputGroupText>
      <Input type="password" placeholder="Password" />
    </InputGroup>
  ),
}
