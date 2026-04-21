import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Overlays/Hover Card',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { HoverCard, HoverCardTrigger, HoverCardContent },
    template: `
      <HoverCard>
        <HoverCardTrigger class="underline cursor-pointer text-sm">@nextjs</HoverCardTrigger>
        <HoverCardContent class="w-64">
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@nextjs</h4>
            <p class="text-sm">The React Framework — created by Vercel.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
