import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta<ButtonComponent> = {
  title: 'Actions & Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ButtonComponent] })],
  render: (args) => ({
    props: args,
    template: `<button paul-button [variant]="variant" [size]="size" [disabled]="disabled">Button</button>`,
  }),
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'destructive-outline', 'destructive-ghost'] },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<ButtonComponent>

export const Default: Story = { args: { variant: 'default', size: 'default' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Link: Story = { args: { variant: 'link' } }
export const DestructiveOutline: Story = { args: { variant: 'destructive-outline' } }
export const DestructiveGhost: Story = { args: { variant: 'destructive-ghost' } }
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } }
