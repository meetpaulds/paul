import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { NavigationMenuComponent, NavigationMenuListComponent, NavigationMenuLinkComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenuComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [NavigationMenuComponent, NavigationMenuListComponent, NavigationMenuLinkComponent] })],
  render: () => ({
    template: `
      <paul-navigation-menu>
        <paul-navigation-menu-list>
          <li><paul-navigation-menu-link>Getting Started</paul-navigation-menu-link></li>
          <li><paul-navigation-menu-link>Components</paul-navigation-menu-link></li>
          <li><paul-navigation-menu-link>Documentation</paul-navigation-menu-link></li>
        </paul-navigation-menu-list>
      </paul-navigation-menu>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
