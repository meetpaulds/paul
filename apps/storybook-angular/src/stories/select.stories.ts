import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SelectComponent, SelectItemComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SelectComponent, SelectItemComponent] })],
  render: () => ({
    template: `
      <paul-select class="w-48">
        <paul-select-item value="">Select a fruit...</paul-select-item>
        <paul-select-item value="apple">Apple</paul-select-item>
        <paul-select-item value="banana">Banana</paul-select-item>
        <paul-select-item value="blueberry">Blueberry</paul-select-item>
        <paul-select-item value="grapes">Grapes</paul-select-item>
      </paul-select>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
