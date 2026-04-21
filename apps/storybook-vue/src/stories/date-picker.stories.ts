import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { DatePicker } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Date & Time/Date Picker',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { DatePicker },
    data() { return { date: undefined } },
    template: `<DatePicker v-model="date" />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
