import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Navigation/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-tabs value="account" class="w-80">
        <paul-tabs-list>
          <paul-tabs-trigger value="account">Account</paul-tabs-trigger>
          <paul-tabs-trigger value="password">Password</paul-tabs-trigger>
        </paul-tabs-list>
        <paul-tabs-content value="account" class="p-4 text-sm">Account settings content.</paul-tabs-content>
        <paul-tabs-content value="password" class="p-4 text-sm">Change your password here.</paul-tabs-content>
      </paul-tabs>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
