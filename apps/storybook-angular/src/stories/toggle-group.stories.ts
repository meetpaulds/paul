import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ToggleGroupComponent, ToggleGroupItemComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/ToggleGroup',
  component: ToggleGroupComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ToggleGroupComponent, ToggleGroupItemComponent] })],
  render: () => ({
    template: `
      <paul-toggle-group type="single">
        <paul-toggle-group-item value="bold">B</paul-toggle-group-item>
        <paul-toggle-group-item value="italic">I</paul-toggle-group-item>
        <paul-toggle-group-item value="underline">U</paul-toggle-group-item>
      </paul-toggle-group>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
