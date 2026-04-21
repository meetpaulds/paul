import type { Meta, StoryObj } from '@storybook/svelte-vite'
import DialogDemo from './wrappers/DialogDemo.svelte'

const meta: Meta = {
  title: 'Overlays/Dialog',
  component: DialogDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
