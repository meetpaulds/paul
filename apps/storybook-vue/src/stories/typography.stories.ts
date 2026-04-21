import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Typography } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-4 max-w-md">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="p">The quick brown fox jumps over the lazy dog.</Typography>
        <Typography variant="muted">Muted text for supporting content.</Typography>
        <Typography variant="lead">A lead paragraph with slightly larger text.</Typography>
        <Typography variant="small">Small text for captions and labels.</Typography>
        <Typography variant="code">inline code example</Typography>
      </div>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
