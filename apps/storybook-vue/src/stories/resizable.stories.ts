import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Layout/Resizable',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Horizontal: Story = {
  render: () => ({
    components: { ResizablePanelGroup, ResizablePanel, ResizableHandle },
    template: `
      <ResizablePanelGroup direction="horizontal" class="max-w-md rounded-lg border" style="height:160px">
        <ResizablePanel :default-size="50"><div class="flex h-full items-center justify-center p-6"><span class="font-semibold">One</span></div></ResizablePanel>
        <ResizableHandle />
        <ResizablePanel :default-size="50"><div class="flex h-full items-center justify-center p-6"><span class="font-semibold">Two</span></div></ResizablePanel>
      </ResizablePanelGroup>
    `,
  }),
}

export const WithHandle: Story = {
  render: () => ({
    components: { ResizablePanelGroup, ResizablePanel, ResizableHandle },
    template: `
      <ResizablePanelGroup direction="horizontal" class="max-w-md rounded-lg border" style="height:160px">
        <ResizablePanel :default-size="50"><div class="flex h-full items-center justify-center p-6"><span class="font-semibold">Sidebar</span></div></ResizablePanel>
        <ResizableHandle :with-handle="true" />
        <ResizablePanel :default-size="50"><div class="flex h-full items-center justify-center p-6"><span class="font-semibold">Main</span></div></ResizablePanel>
      </ResizablePanelGroup>
    `,
  }),
}

export const Dark: Story = { ...Horizontal, globals: { theme: 'dark' } }
