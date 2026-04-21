import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { FieldComponent, InputComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Data Entry & Forms/Field',
  component: FieldComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [FieldComponent, InputComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `<paul-field label="Email" description="We will never share your email." class="w-72"><paul-input placeholder="you@example.com"></paul-input></paul-field>`,
  }),
}

export const WithError: Story = {
  render: () => ({
    template: `<paul-field label="Email" error="Please enter a valid email address." class="w-72"><paul-input placeholder="you@example.com"></paul-input></paul-field>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
