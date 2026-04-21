import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ToastDemo from './wrappers/ToastDemo.svelte'

const meta: Meta = {
  title: 'Feedback/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
