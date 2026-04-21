import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { BreadcrumbComponent, BreadcrumbListComponent, BreadcrumbItemComponent, BreadcrumbLinkComponent, BreadcrumbPageComponent, BreadcrumbSeparatorComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [BreadcrumbComponent, BreadcrumbListComponent, BreadcrumbItemComponent, BreadcrumbLinkComponent, BreadcrumbPageComponent, BreadcrumbSeparatorComponent] })],
  render: () => ({
    template: `
      <paul-breadcrumb>
        <paul-breadcrumb-list>
          <paul-breadcrumb-item><paul-breadcrumb-link>Home</paul-breadcrumb-link></paul-breadcrumb-item>
          <paul-breadcrumb-separator />
          <paul-breadcrumb-item><paul-breadcrumb-link>Components</paul-breadcrumb-link></paul-breadcrumb-item>
          <paul-breadcrumb-separator />
          <paul-breadcrumb-item><paul-breadcrumb-page>Breadcrumb</paul-breadcrumb-page></paul-breadcrumb-item>
        </paul-breadcrumb-list>
      </paul-breadcrumb>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
