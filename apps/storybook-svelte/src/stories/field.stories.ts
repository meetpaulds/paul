import type { Meta, StoryObj } from '@storybook/svelte-vite'
import FieldDemo from './wrappers/FieldDemo.svelte'

const meta: Meta = {
  title: 'Data Entry & Forms/Field',
  component: FieldDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
