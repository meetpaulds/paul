import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Toggle } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Actions & Buttons/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'select', options: ['default', 'outline'] } },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({ components: { Toggle }, template: `<Toggle>Bold</Toggle>` }),
}

export const Outline: Story = {
  render: () => ({ components: { Toggle }, template: `<Toggle variant="outline">Italic</Toggle>` }),
}

export const Pressed: Story = {
  render: () => ({ components: { Toggle }, template: `<Toggle :pressed="true">Underline</Toggle>` }),
}

export const Disabled: Story = {
  render: () => ({ components: { Toggle }, template: `<Toggle disabled>Disabled</Toggle>` }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
