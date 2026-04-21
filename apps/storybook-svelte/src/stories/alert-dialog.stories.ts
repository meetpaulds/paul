import type { Meta, StoryObj } from '@storybook/svelte-vite'
import AlertDialogDemo from './wrappers/AlertDialogDemo.svelte'

const meta: Meta = {
  title: 'Overlays/AlertDialog',
  component: AlertDialogDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
