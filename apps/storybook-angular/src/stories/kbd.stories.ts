import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { KbdComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Data Display/Kbd',
  component: KbdComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [KbdComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({ template: `<paul-kbd>⌘K</paul-kbd>` }),
}

export const Combo: Story = {
  render: () => ({ template: `<div class="flex items-center gap-1"><paul-kbd>Ctrl</paul-kbd><paul-kbd>Shift</paul-kbd><paul-kbd>P</paul-kbd></div>` }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
