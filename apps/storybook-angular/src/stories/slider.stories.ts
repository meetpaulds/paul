import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SliderComponent } from '@meetpaul/ui-angular'

const meta: Meta<SliderComponent> = {
  title: 'Data Entry & Forms/Slider',
  component: SliderComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SliderComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-slider [value]="value" [min]="min" [max]="max" [step]="step" [disabled]="disabled" class="w-64"></paul-slider>`,
  }),
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<SliderComponent>

export const Default: Story = { args: { value: 50, min: 0, max: 100, step: 1 } }
export const Disabled: Story = { args: { value: 40, disabled: true } }
export const Dark: Story = { args: { value: 50, min: 0, max: 100, step: 1 }, globals: { theme: 'dark' } }
