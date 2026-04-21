import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Disclosure/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Collapsible, CollapsibleTrigger, CollapsibleContent, Button },
    template: `
      <Collapsible class="w-72 space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger as-child>
            <Button variant="ghost" size="sm">Toggle</Button>
          </CollapsibleTrigger>
        </div>
        <div class="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
        <CollapsibleContent class="space-y-2">
          <div class="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
          <div class="rounded-md border px-4 py-2 text-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
