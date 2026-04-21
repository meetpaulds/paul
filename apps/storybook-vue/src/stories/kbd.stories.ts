import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Kbd } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Display/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Kbd },
    template: `<div class="flex items-center gap-1 text-sm"><Kbd>⌘</Kbd><span>+</span><Kbd>K</Kbd></div>`,
  }),
}

export const AllKeys: Story = {
  render: () => ({
    components: { Kbd },
    template: `<div class="flex flex-wrap gap-2"><Kbd>⌘</Kbd><Kbd>⌥</Kbd><Kbd>⇧</Kbd><Kbd>⌃</Kbd><Kbd>Enter</Kbd><Kbd>Esc</Kbd><Kbd>Tab</Kbd></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
