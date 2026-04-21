import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TableComponent, TableHeaderComponent, TableBodyComponent, TableRowComponent, TableHeadComponent, TableCellComponent, TableCaptionComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Display/Table',
  component: TableComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TableComponent, TableHeaderComponent, TableBodyComponent, TableRowComponent, TableHeadComponent, TableCellComponent, TableCaptionComponent] })],
  render: () => ({
    template: `
      <paul-table>
        <paul-table-caption>A list of recent invoices.</paul-table-caption>
        <paul-table-header>
          <paul-table-row>
            <paul-table-head>Invoice</paul-table-head>
            <paul-table-head>Status</paul-table-head>
            <paul-table-head>Method</paul-table-head>
            <paul-table-head>Amount</paul-table-head>
          </paul-table-row>
        </paul-table-header>
        <paul-table-body>
          <paul-table-row>
            <paul-table-cell>INV001</paul-table-cell>
            <paul-table-cell>Paid</paul-table-cell>
            <paul-table-cell>Credit Card</paul-table-cell>
            <paul-table-cell>$250.00</paul-table-cell>
          </paul-table-row>
          <paul-table-row>
            <paul-table-cell>INV002</paul-table-cell>
            <paul-table-cell>Pending</paul-table-cell>
            <paul-table-cell>PayPal</paul-table-cell>
            <paul-table-cell>$150.00</paul-table-cell>
          </paul-table-row>
          <paul-table-row>
            <paul-table-cell>INV003</paul-table-cell>
            <paul-table-cell>Unpaid</paul-table-cell>
            <paul-table-cell>Bank Transfer</paul-table-cell>
            <paul-table-cell>$350.00</paul-table-cell>
          </paul-table-row>
        </paul-table-body>
      </paul-table>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
