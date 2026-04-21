import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { InputOTP } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Input OTP',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { InputOTP },
    data() { return { value: '' } },
    template: `<InputOTP v-model="value" :max-length="6" />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
