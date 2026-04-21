import type { Meta, StoryObj } from '@storybook/svelte-vite'
import DatePickerDemo from './wrappers/DatePickerDemo.svelte'

const meta: Meta = {
  title: 'Inputs/DatePicker',
  component: DatePickerDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
