import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { DatePicker } from './date-picker'

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <DatePicker
        date={date}
        onSelect={setDate}
      />
    )
  },
}

export const WithPlaceholder: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    return (
      <DatePicker
        date={date}
        onSelect={setDate}
        placeholder="Pick a date"
      />
    )
  },
}
