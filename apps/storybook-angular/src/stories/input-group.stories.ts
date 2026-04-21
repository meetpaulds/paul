import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { InputGroupComponent, InputGroupTextComponent, InputComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Data Entry & Forms/Input Group',
  component: InputGroupComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [InputGroupComponent, InputGroupTextComponent, InputComponent] })],
}
export default meta
type Story = StoryObj

export const Prefix: Story = {
  render: () => ({
    template: `<paul-input-group class="w-72"><paul-input-group-text>@</paul-input-group-text><paul-input placeholder="username"></paul-input></paul-input-group>`,
  }),
}

export const Suffix: Story = {
  render: () => ({
    template: `<paul-input-group class="w-72"><paul-input placeholder="amount"></paul-input><paul-input-group-text>USD</paul-input-group-text></paul-input-group>`,
  }),
}

export const Dark: Story = { ...Prefix, globals: { theme: 'dark' } }
