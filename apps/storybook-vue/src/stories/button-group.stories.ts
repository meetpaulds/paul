import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Button, ButtonGroup } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Actions & Buttons/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Button, ButtonGroup },
    template: `<ButtonGroup><Button variant="outline">Left</Button><Button variant="outline">Middle</Button><Button variant="outline">Right</Button></ButtonGroup>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
