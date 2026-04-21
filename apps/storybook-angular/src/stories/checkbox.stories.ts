import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CheckboxComponent } from '@meetpaul/ui-angular'

const meta: Meta<CheckboxComponent> = {
  title: 'Data Entry & Forms/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CheckboxComponent] })],
  render: (args) => ({
    props: args,
    template: `<div class="flex items-center gap-2"><paul-checkbox [disabled]="disabled"></paul-checkbox><label class="text-sm font-medium leading-none">Accept terms and conditions</label></div>`,
  }),
  argTypes: { disabled: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<CheckboxComponent>

export const Default: Story = { args: { disabled: false } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: { disabled: false }, globals: { theme: 'dark' } }
