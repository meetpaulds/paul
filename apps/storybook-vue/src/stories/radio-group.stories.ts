import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { RadioGroup, RadioGroupItem, Label } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup default-value="option-one">
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="o1" />
          <Label for="o1">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="o2" />
          <Label for="o2">Option Two</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option-three" id="o3" />
          <Label for="o3">Option Three</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
