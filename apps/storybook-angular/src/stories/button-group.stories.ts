import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ButtonGroupComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Actions & Buttons/Button Group',
  component: ButtonGroupComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ButtonGroupComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-button-group>
        <button paul-button variant="outline">Bold</button>
        <button paul-button variant="outline">Italic</button>
        <button paul-button variant="outline">Underline</button>
      </paul-button-group>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
