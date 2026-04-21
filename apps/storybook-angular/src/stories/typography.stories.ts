import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TypographyComponent } from '@meetpaul/ui-angular'

const meta: Meta<TypographyComponent> = {
  title: 'Data Display/Typography',
  component: TypographyComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TypographyComponent] })],
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
type Story = StoryObj<TypographyComponent>

export const H1: Story = { args: { variant: 'h1' } }
export const H2: Story = { args: { variant: 'h2' } }
export const H3: Story = { args: { variant: 'h3' } }
export const Paragraph: Story = { args: { variant: 'p' } }
export const Muted: Story = { args: { variant: 'muted' } }
export const Lead: Story = { args: { variant: 'lead' } }
export const Small: Story = { args: { variant: 'small' } }
export const Code: Story = { args: { variant: 'code' } }
export const Dark: Story = { args: { variant: 'h1' }, globals: { theme: 'dark' } }
