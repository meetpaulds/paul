import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ScrollArea from '@meetpaul/ui-svelte/ScrollArea.svelte'

const meta: Meta<typeof ScrollArea> = {
  title: 'Layout/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = { args: { class: 'h-48 w-64 rounded-md border p-4' } }
export const Dark: Story = { args: { class: 'h-48 w-64 rounded-md border p-4' }, globals: { theme: 'dark' } }
