import type { Meta, StoryObj } from '@storybook/svelte-vite'
import MenubarDemo from './wrappers/MenubarDemo.svelte'

const meta: Meta = {
  title: 'Navigation/Menubar',
  component: MenubarDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
