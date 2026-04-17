import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChartContainer, ChartTooltipContent } from '@meetpaul/ui'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
]

const meta = {
  title: 'Charts/Chart',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BarChartStory: Story = {
  render: () => (
    <ChartContainer config={{ value: { label: 'Sales', color: 'hsl(var(--chart-1))' } }} className="h-[300px] w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--chart-1))" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
}

export const LineChartStory: Story = {
  render: () => (
    <ChartContainer config={{ value: { label: 'Revenue', color: 'hsl(var(--chart-2))' } }} className="h-[300px] w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="value" stroke="hsl(var(--chart-2))" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
}

export const Dark: Story = {
  render: () => (
    <ChartContainer config={{ value: { label: 'Sales', color: 'hsl(var(--chart-1))' } }} className="h-[300px] w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--chart-1))" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
  globals: { theme: 'dark' },
}
