import type { Meta, StoryObj } from '@storybook/svelte-vite'
import TableDemo from './wrappers/TableDemo.svelte'

const meta: Meta = {
  title: 'Display/Table',
  component: TableDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
