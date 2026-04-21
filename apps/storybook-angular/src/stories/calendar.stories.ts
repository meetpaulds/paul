import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CalendarComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/Calendar',
  component: CalendarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CalendarComponent] })],
  render: () => ({ template: `<paul-calendar />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
