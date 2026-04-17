import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from '@meetpaul/ui'
import { Input } from '@meetpaul/ui'

const meta = {
  title: 'Components/Field',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

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

export const Dark: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Field label="Email" hint="We will never share your email.">
        <Input type="email" placeholder="Enter your email" />
      </Field>
      <Field label="Username" required>
        <Input placeholder="Enter username" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters.">
        <Input type="password" value="123" />
      </Field>
    </div>
  ),
  globals: { theme: 'dark' },
}
