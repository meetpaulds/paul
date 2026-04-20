import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Slider } from '@meetpaul/ui'

const meta = {
  title: 'Data Entry & Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[300px]',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const slider = canvas.getByRole('slider')
    await expect(slider).toHaveAttribute('aria-valuenow', '50')
  },
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-[300px]',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
    className: 'w-[300px]',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('slider')).toHaveAttribute('data-disabled')
  },
}

export const Dark: Story = {
  args: {
    defaultValue: [40],
    max: 100,
    step: 1,
    className: 'w-[300px]',
  },
  globals: { theme: 'dark' },
}
