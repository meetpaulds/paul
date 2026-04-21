import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TextareaComponent } from '@meetpaul/ui-angular'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Data Entry & Forms/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TextareaComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-textarea [placeholder]="placeholder" [disabled]="disabled" class="w-72"></paul-textarea>`,
  }),
  argTypes: { disabled: { control: 'boolean' } } as any,
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { placeholder: 'Type your message here.' } as any }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } as any }
export const Dark: Story = { args: { placeholder: 'Type your message here.' } as any, globals: { theme: 'dark' } }
