import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Tables & Data/Table',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption },
    template: `
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell class="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium">INV003</TableCell>
            <TableCell>Unpaid</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell class="text-right">$350.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell class="text-right">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
