import type { Meta, StoryObj } from '@storybook/react'
import { Field } from './field'
import { Input } from './input'

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field label="Email" hint="We will never share your email.">
      <Input type="email" placeholder="Enter your email" />
    </Field>
  ),
}

export const Required: Story = {
  render: () => (
    <Field label="Username" required>
      <Input placeholder="Enter username" />
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field label="Password" error="Password must be at least 8 characters.">
      <Input type="password" value="123" />
    </Field>
  ),
}
