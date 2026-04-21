import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TableComponent, TableHeaderComponent, TableBodyComponent, TableRowComponent, TableHeadComponent, TableCellComponent } from '@meetpaul/ui-angular'
import { CommonModule, CurrencyPipe } from '@angular/common'

const meta: Meta = {
  title: 'Display/DataTable',
  component: TableComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TableComponent, TableHeaderComponent, TableBodyComponent, TableRowComponent, TableHeadComponent, TableCellComponent, CommonModule, CurrencyPipe] })],
  render: () => ({
    template: `
      <div class="rounded-md border w-full max-w-2xl">
        <paul-table>
          <paul-table-header>
            <paul-table-row>
              <paul-table-head>ID</paul-table-head>
              <paul-table-head>Status</paul-table-head>
              <paul-table-head>Email</paul-table-head>
              <paul-table-head>Amount</paul-table-head>
            </paul-table-row>
          </paul-table-header>
          <paul-table-body>
            <paul-table-row *ngFor="let row of payments">
              <paul-table-cell class="font-medium">{{ row.id }}</paul-table-cell>
              <paul-table-cell>{{ row.status }}</paul-table-cell>
              <paul-table-cell>{{ row.email }}</paul-table-cell>
              <paul-table-cell>{{ row.amount | currency }}</paul-table-cell>
            </paul-table-row>
          </paul-table-body>
        </paul-table>
      </div>
    `,
    props: {
      payments: [
        { id: 'INV001', status: 'success', email: 'ken99@yahoo.com', amount: 316 },
        { id: 'INV002', status: 'success', email: 'abe45@gmail.com', amount: 242 },
        { id: 'INV003', status: 'processing', email: 'monserrat44@gmail.com', amount: 837 },
        { id: 'INV004', status: 'success', email: 'silas22@gmail.com', amount: 874 },
        { id: 'INV005', status: 'failed', email: 'carmella@hotmail.com', amount: 721 },
      ],
    },
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
