import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Input, InputGroup, InputGroupText } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Input Group',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Prefix: Story = {
  render: () => ({
    components: { Input, InputGroup, InputGroupText },
    template: `<InputGroup class="w-72"><InputGroupText>@</InputGroupText><Input placeholder="username" /></InputGroup>`,
  }),
}

export const Suffix: Story = {
  render: () => ({
    components: { Input, InputGroup, InputGroupText },
    template: `<InputGroup class="w-72"><Input placeholder="amount" /><InputGroupText>USD</InputGroupText></InputGroup>`,
  }),
}

export const Dark: Story = { ...Prefix, globals: { theme: 'dark' } }
