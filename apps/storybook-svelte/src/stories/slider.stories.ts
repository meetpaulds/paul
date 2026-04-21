import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Slider from '@meetpaul/ui-svelte/Slider.svelte'

const meta: Meta<typeof Slider> = {
  title: 'Data Entry & Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = { args: { value: 50, min: 0, max: 100, step: 1, class: 'w-64' } }
export const Disabled: Story = { args: { value: 40, disabled: true, class: 'w-64' } }
export const Dark: Story = { args: { value: 50, min: 0, max: 100, step: 1, class: 'w-64' }, globals: { theme: 'dark' } }
