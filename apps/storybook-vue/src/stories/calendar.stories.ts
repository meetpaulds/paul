import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Calendar } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Date & Time/Calendar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Calendar },
    data() { return { date: new Date() } },
    template: `<Calendar v-model="date" class="rounded-md border" />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
