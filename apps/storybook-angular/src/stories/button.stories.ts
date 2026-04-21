import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from '@meetpaul/ui-angular'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
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
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { variant: 'default', size: 'default' } as any }
export const Destructive: Story = { args: { variant: 'destructive' } as any }
export const Outline: Story = { args: { variant: 'outline' } as any }
export const Secondary: Story = { args: { variant: 'secondary' } as any }
export const Ghost: Story = { args: { variant: 'ghost' } as any }
export const Link: Story = { args: { variant: 'link' } as any }
export const DestructiveOutline: Story = { args: { variant: 'destructive-outline' } as any }
export const DestructiveGhost: Story = { args: { variant: 'destructive-ghost' } as any }
export const Small: Story = { args: { size: 'sm' } as any }
export const Large: Story = { args: { size: 'lg' } as any }
export const Disabled: Story = { args: { disabled: true } as any }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } } as any
