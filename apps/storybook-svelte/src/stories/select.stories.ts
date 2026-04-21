import type { Meta, StoryObj } from '@storybook/svelte-vite'
import SelectDemo from './wrappers/SelectDemo.svelte'

const meta: Meta = {
  title: 'Data Entry & Forms/Select',
  component: SelectDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
