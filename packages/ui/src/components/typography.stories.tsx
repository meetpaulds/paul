import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'code', 'lead', 'large', 'small', 'muted', 'list'],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph',
  },
}

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Typography variant="lead">Lead text - A large, muted paragraph for introductions</Typography>
      <Typography variant="p">Regular paragraph text for body content.</Typography>
      <Typography variant="large">Large text</Typography>
      <Typography variant="small">Small text</Typography>
      <Typography variant="muted">Muted text for secondary information</Typography>
      <Typography variant="code">Code text for inline code</Typography>
    </div>
  ),
}
