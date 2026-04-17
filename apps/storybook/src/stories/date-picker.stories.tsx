import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { DatePicker } from '@meetpaul/ui'

const meta = {
  title: 'Components/DatePicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

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

export const Dark: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <DatePicker
        date={date}
        onSelect={setDate}
      />
    )
  },
  globals: { theme: 'dark' },
}
