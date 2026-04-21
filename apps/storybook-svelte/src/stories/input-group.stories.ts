import type { Meta, StoryObj } from '@storybook/svelte-vite'
import InputGroupDemo from './wrappers/InputGroupDemo.svelte'

const meta: Meta = {
  title: 'Data Entry & Forms/Input Group',
  component: InputGroupDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
