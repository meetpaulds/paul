import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from '@meetpaul/ui'

const meta = {
  title: 'Data Entry & Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
    className: 'w-[300px]',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
    className: 'w-[300px]',
  },
}

export const Dark: Story = {
  args: {
    placeholder: 'Type your message here.',
    className: 'w-[300px]',
  },
  globals: { theme: 'dark' },
}
