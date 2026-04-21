import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Navigation/Context Menu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem },
    template: `
      <ContextMenu>
        <ContextMenuTrigger class="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm select-none">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuItem>Save As</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
