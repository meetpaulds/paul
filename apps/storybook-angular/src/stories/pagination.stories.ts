import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { PaginationComponent, PaginationContentComponent, PaginationItemComponent, PaginationLinkComponent, PaginationPreviousComponent, PaginationNextComponent, PaginationEllipsisComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Navigation/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [PaginationComponent, PaginationContentComponent, PaginationItemComponent, PaginationLinkComponent, PaginationPreviousComponent, PaginationNextComponent, PaginationEllipsisComponent] })],
  render: () => ({
    template: `
      <paul-pagination>
        <paul-pagination-content>
          <paul-pagination-item><paul-pagination-previous /></paul-pagination-item>
          <paul-pagination-item><paul-pagination-link [isActive]="false">1</paul-pagination-link></paul-pagination-item>
          <paul-pagination-item><paul-pagination-link [isActive]="true">2</paul-pagination-link></paul-pagination-item>
          <paul-pagination-item><paul-pagination-link [isActive]="false">3</paul-pagination-link></paul-pagination-item>
          <paul-pagination-item><paul-pagination-ellipsis /></paul-pagination-item>
          <paul-pagination-item><paul-pagination-next /></paul-pagination-item>
        </paul-pagination-content>
      </paul-pagination>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
