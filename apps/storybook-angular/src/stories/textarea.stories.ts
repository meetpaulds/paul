import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TextareaComponent } from '@meetpaul/ui-angular'

const meta: Meta<TextareaComponent> = {
  title: 'Data Entry & Forms/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TextareaComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-textarea [placeholder]="placeholder" [disabled]="disabled" class="w-72"></paul-textarea>`,
  }),
  argTypes: { disabled: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<TextareaComponent>

export const Default: Story = { args: { placeholder: 'Type your message here.' } }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } }
export const Dark: Story = { args: { placeholder: 'Type your message here.' }, globals: { theme: 'dark' } }
