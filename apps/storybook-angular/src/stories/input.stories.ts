import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { InputComponent } from '@meetpaul/ui-angular'

const meta: Meta<InputComponent> = {
  title: 'Data Entry & Forms/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [InputComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-input [type]="type" [placeholder]="placeholder" [disabled]="disabled" class="w-72"></paul-input>`,
  }),
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'file', 'number'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<InputComponent>

export const Default: Story = { args: { placeholder: 'Email', type: 'email' } }
export const File: Story = { args: { type: 'file' } }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } }
export const Dark: Story = { args: { placeholder: 'Email' }, globals: { theme: 'dark' } }
