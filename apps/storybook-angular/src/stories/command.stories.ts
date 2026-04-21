import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CommandComponent, CommandGroupComponent, CommandItemComponent, CommandSeparatorComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/Command',
  component: CommandComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CommandComponent, CommandGroupComponent, CommandItemComponent, CommandSeparatorComponent] })],
  render: () => ({
    template: `
      <div class="w-72 rounded-md border shadow-md">
        <paul-command>
          <paul-command-group heading="Suggestions">
            <paul-command-item>Calendar</paul-command-item>
            <paul-command-item>Search Emoji</paul-command-item>
            <paul-command-item>Calculator</paul-command-item>
          </paul-command-group>
          <paul-command-separator />
          <paul-command-group heading="Settings">
            <paul-command-item>Profile</paul-command-item>
            <paul-command-item>Billing</paul-command-item>
            <paul-command-item>Settings</paul-command-item>
          </paul-command-group>
        </paul-command>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
