import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectSeparator } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectSeparator },
    template: `
      <Select>
        <SelectTrigger class="w-48"><span>Select a fruit</span></SelectTrigger>
        <SelectContent>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectSeparator />
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem },
    template: `<Select disabled><SelectTrigger class="w-48"><span>Disabled</span></SelectTrigger><SelectContent><SelectItem value="a">Option</SelectItem></SelectContent></Select>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
