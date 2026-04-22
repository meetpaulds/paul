import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ButtonGroupDemo from './wrappers/ButtonGroupDemo.svelte'

const meta: Meta<typeof ButtonGroupDemo> = {
  title: 'Actions & Buttons/Button Group',
  component: ButtonGroupDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
