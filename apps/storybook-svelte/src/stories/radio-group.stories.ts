import type { Meta, StoryObj } from '@storybook/svelte-vite'
import RadioGroupDemo from './wrappers/RadioGroupDemo.svelte'

const meta: Meta = {
  title: 'Data Entry & Forms/Radio Group',
  component: RadioGroupDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
