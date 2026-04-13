import type { Meta, StoryObj } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from './data-table'
import { Button } from './button'
import { ArrowUpDown } from 'lucide-react'

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const data: Payment[] = [
  { id: '728ed52f', amount: 100, status: 'pending', email: 'm@example.com' },
  { id: '489e1d42', amount: 125, status: 'processing', email: 'example@gmail.com' },
  { id: '489e1d43', amount: 200, status: 'success', email: 'test@example.com' },
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]

export const Default: Story = {
  args: {
    data,
    columns,
  },
}
