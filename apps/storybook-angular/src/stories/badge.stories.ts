import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { BadgeComponent } from '@meetpaul/ui-angular'

const meta: Meta<BadgeComponent> = {
  title: 'Data Display/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [BadgeComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-badge [variant]="variant">Badge</paul-badge>`,
  }),
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
  },
}
export default meta
type Story = StoryObj<BadgeComponent>

export const Default: Story = { args: { variant: 'default' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } }
