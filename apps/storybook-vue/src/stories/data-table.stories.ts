import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { DataTable } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Tables & Data/Data Table',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'status', header: 'Status' },
  { key: 'email', header: 'Email' },
  { key: 'amount', header: 'Amount' },
]

const data = [
  { id: 'INV001', status: 'Pending', email: 'm@example.com', amount: '$316.00' },
  { id: 'INV002', status: 'Processing', email: 'b@example.com', amount: '$242.00' },
  { id: 'INV003', status: 'Success', email: 'j@example.com', amount: '$837.00' },
  { id: 'INV004', status: 'Failed', email: 's@example.com', amount: '$874.00' },
]

export const Default: Story = {
  render: () => ({
    components: { DataTable },
    data() { return { columns, data } },
    template: `<DataTable :columns="columns" :data="data" />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
