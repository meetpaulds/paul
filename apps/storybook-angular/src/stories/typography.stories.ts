import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TypographyDirective } from '@meetpaul/ui-angular'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Data Display/Typography',
  component: TypographyDirective,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TypographyDirective] })],
  render: (args) => ({
    props: args,
    template: `<paul-typography [variant]="variant">The quick brown fox jumps over the lazy dog.</paul-typography>`,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'muted', 'lead', 'small', 'code', 'blockquote'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = { args: { variant: 'h1' } as any }
export const H2: Story = { args: { variant: 'h2' } as any }
export const H3: Story = { args: { variant: 'h3' } as any }
export const Paragraph: Story = { args: { variant: 'p' } as any }
export const Muted: Story = { args: { variant: 'muted' } as any }
export const Lead: Story = { args: { variant: 'lead' } as any }
export const Small: Story = { args: { variant: 'small' } as any }
export const Code: Story = { args: { variant: 'code' } as any }
export const Dark: Story = { args: { variant: 'h1' } as any, globals: { theme: 'dark' } }
