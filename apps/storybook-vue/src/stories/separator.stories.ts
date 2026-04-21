import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Separator } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => ({
    components: { Separator },
    template: `<div class="w-64"><p class="text-sm font-medium">Radix Primitives</p><p class="text-sm text-muted-foreground">An open-source UI component library.</p><Separator class="my-4" /><div class="flex gap-4 text-sm"><span>Blog</span><Separator orientation="vertical" class="h-4" /><span>Docs</span><Separator orientation="vertical" class="h-4" /><span>Source</span></div></div>`,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `<div class="flex h-12 items-center gap-4 text-sm"><span>Left</span><Separator orientation="vertical" /><span>Right</span></div>`,
  }),
}

export const Dark: Story = { ...Horizontal, globals: { theme: 'dark' } }
