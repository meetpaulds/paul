import type { Meta, StoryObj } from '@storybook/svelte-vite'
import SonnerDemo from './wrappers/SonnerDemo.svelte'

const meta: Meta = {
  title: 'Feedback/Sonner',
  component: SonnerDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
