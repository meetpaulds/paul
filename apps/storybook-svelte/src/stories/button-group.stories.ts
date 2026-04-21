import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ButtonGroupDemo from './wrappers/ButtonGroupDemo.svelte'

const meta: Meta = {
  title: 'Actions & Buttons/Button Group',
  component: ButtonGroupDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
