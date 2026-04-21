import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { RadioGroupComponent, RadioGroupItemComponent, LabelComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Data Entry & Forms/Radio Group',
  component: RadioGroupComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [RadioGroupComponent, RadioGroupItemComponent, LabelComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-radio-group value="option-one">
        <div class="flex items-center gap-2">
          <paul-radio-group-item value="option-one" id="o1"></paul-radio-group-item>
          <paul-label for="o1">Option One</paul-label>
        </div>
        <div class="flex items-center gap-2">
          <paul-radio-group-item value="option-two" id="o2"></paul-radio-group-item>
          <paul-label for="o2">Option Two</paul-label>
        </div>
        <div class="flex items-center gap-2">
          <paul-radio-group-item value="option-three" id="o3"></paul-radio-group-item>
          <paul-label for="o3">Option Three</paul-label>
        </div>
      </paul-radio-group>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
