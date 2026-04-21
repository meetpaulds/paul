import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ChartDemo from './wrappers/ChartDemo.svelte'

const meta: Meta = {
  title: 'Display/Chart',
  component: ChartDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
