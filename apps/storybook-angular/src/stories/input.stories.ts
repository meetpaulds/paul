import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { InputComponent } from '@meetpaul/ui-angular'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
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
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { placeholder: 'Email', type: 'email' } as any }
export const File: Story = { args: { type: 'file' } as any }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } as any }
export const Dark: Story = { args: { placeholder: 'Email' } as any, globals: { theme: 'dark' } }
