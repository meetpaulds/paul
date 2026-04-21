import type { Meta, StoryObj } from '@storybook/svelte-vite'
import DataTableDemo from './wrappers/DataTableDemo.svelte'

const meta: Meta = {
  title: 'Display/DataTable',
  component: DataTableDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
