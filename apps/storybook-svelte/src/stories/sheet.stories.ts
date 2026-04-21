import type { Meta, StoryObj } from '@storybook/svelte-vite'
import SheetDemo from './wrappers/SheetDemo.svelte'

const meta: Meta = {
  title: 'Overlays/Sheet',
  component: SheetDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
