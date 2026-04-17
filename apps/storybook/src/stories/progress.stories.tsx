import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from '@meetpaul/ui'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
    className: 'w-[300px]',
  },
}

export const Complete: Story = {
  args: {
    value: 100,
    className: 'w-[300px]',
  },
}

export const Dark: Story = {
  args: {
    value: 60,
    className: 'w-[300px]',
  },
  globals: { theme: 'dark' },
}
