import type { Meta, StoryObj } from '@storybook/svelte-vite'
import AvatarDemo from './wrappers/AvatarDemo.svelte'

const meta: Meta = {
  title: 'Media/Avatar',
  component: AvatarDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
