import type { Meta, StoryObj } from '@storybook/svelte-vite'
import CarouselDemo from './wrappers/CarouselDemo.svelte'

const meta: Meta = {
  title: 'Display/Carousel',
  component: CarouselDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
