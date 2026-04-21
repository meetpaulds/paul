import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ToggleComponent } from '@meetpaul/ui-angular'

const meta: Meta<ToggleComponent> = {
  title: 'Actions & Buttons/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ToggleComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-toggle [variant]="variant" [pressed]="pressed" [disabled]="disabled">Bold</paul-toggle>`,
  }),
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<ToggleComponent>

export const Default: Story = { args: { variant: 'default' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Pressed: Story = { args: { pressed: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } }
