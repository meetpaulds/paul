import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Label from '@meetpaul/ui-svelte/Label.svelte'

const meta: Meta<typeof Label> = {
  title: 'Data Entry & Forms/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = { args: {} }
export const Dark: Story = { args: {}, globals: { theme: 'dark' } }
