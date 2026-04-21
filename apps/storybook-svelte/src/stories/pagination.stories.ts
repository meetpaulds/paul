import type { Meta, StoryObj } from '@storybook/svelte-vite'
import PaginationDemo from './wrappers/PaginationDemo.svelte'

const meta: Meta = {
  title: 'Navigation/Pagination',
  component: PaginationDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
