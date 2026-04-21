import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ToggleComponent } from '@meetpaul/ui-angular'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
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
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { variant: 'default' } as any }
export const Outline: Story = { args: { variant: 'outline' } as any }
export const Pressed: Story = { args: { pressed: true } as any }
export const Disabled: Story = { args: { disabled: true } as any }
export const Dark: Story = { args: { variant: 'default' } as any, globals: { theme: 'dark' } }
