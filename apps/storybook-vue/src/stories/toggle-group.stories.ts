import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ToggleGroup, ToggleGroupItem } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Actions & Buttons/Toggle Group',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    template: `<ToggleGroup type="multiple"><ToggleGroupItem value="bold">B</ToggleGroupItem><ToggleGroupItem value="italic">I</ToggleGroupItem><ToggleGroupItem value="underline">U</ToggleGroupItem></ToggleGroup>`,
  }),
}

export const Single: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    template: `<ToggleGroup type="single"><ToggleGroupItem value="left">Left</ToggleGroupItem><ToggleGroupItem value="center">Center</ToggleGroupItem><ToggleGroupItem value="right">Right</ToggleGroupItem></ToggleGroup>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
